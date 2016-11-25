var express = require('express'),
	events = require('events'),
	superagent = require('superagent'),
	cheerio = require('cheerio')

var eventEmitter = new events.EventEmitter(),
	books = {},
	bookList = []
//url参数组成的json对象
var url = 'http://222.200.122.171:7771/showpageforlucenesearchAjax.aspx?',
	urlObj = {
		'anywords': null,
		'dt': 'ALL',
		'cl': 'ALL',
		'dp': 20,
		'sf': 'M_PUB_YEAR',
		'ob': 'DESC',
		'sm': 'table',
		'dept': null
	},
	searchURL //用于存储检索的url
//header的json对象
var header = {
	'Host': '222.200.122.171:7771',
	'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
	'Accept': 'text/javascript, text/html, application/xml, text/xml, */*',
	'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
	'Accept-Encoding': 'gzip, deflate',
	'X-Requested-With': 'XMLHttpRequest',
	'X-Prototype-Version': '1.5.0',
	'Connection': 'keep-alive',
	'Referer': 'http://222.200.122.171:7771/'
}

//配置爬虫url和header
books.config = function (campus, keywords, page) {
	var search = ''; //URL 的查询部分（问号 ? 之后的部分）
	urlObj.anywords = keywords
	urlObj.dept = campus
	for (var key in urlObj) {
		search += key + '=' + urlObj[key] + '&'
	}
	search += 'page=' + page
	searchURL = url + encodeURIComponent(search) + '='
	console.log(searchURL)
	return this
};
//爬数据
books.spider = function () {
	//重置搜索结果，防止其返回上一次的搜索结果
	bookList = []
	superagent.get(searchURL).set(header).end(function (err, res) {
		if (err) {
			console.log(err)
		}
		var $ = cheerio.load(res.text),
			pagecount = $('#gotoddl1>option').length,
			regExp = /\d+/g //匹配数字
		console.log('pagecount:' + pagecount)
		//通过CSS selector来筛选数据
		$('tbody tr').each(function (trIndex, trElement) {
			var bookInfoObj = {
				pagecount: pagecount
			}
			$(this).find('td').each(function (tdIndex, tdElement) {
				switch (tdIndex) {
				case 1:
					var anchor = $(this).find('a'),
						bookID = anchor.attr('href').match(regExp)
					bookInfoObj.title = anchor.text()
					bookInfoObj.bookID = bookID[0]
					break
				case 2:
					bookInfoObj.author = $(this).text()
					break
				case 3:
					bookInfoObj.publisher = $(this).text()
					break
				case 4:
					bookInfoObj.date = $(this).text()
					break
				}
			});
			//存储所有搜索结果的数组
			bookList.push(bookInfoObj)
		})
		eventEmitter.emit('bookListHasGotten')
	})
	return this
};
//返回搜索结果
books.getBookList = function (req, res) {
	eventEmitter.once('bookListHasGotten', function () {
		res.status(200).json(bookList)
	});
	return this
}

module.exports = books
