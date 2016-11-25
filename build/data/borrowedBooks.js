var express = require('express'),
	events = require('events'),
	superagent = require('superagent'),
	cheerio = require('cheerio')

var eventEmitter = new events.EventEmitter(),
	borrowedBooks = {},
	borrowedBookList = []
//borrowedBooks url
var url = 'http://222.200.122.171:7771/user/bookborrowed.aspx'
//header的json对象
var header = {
	'Host': '222.200.122.171:7771',
	'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
	'Accept': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
	'Accept-Language': "zh-CN,zh;q=0.8",
	'Accept-Encoding': 'gzip, deflate, sdch',
	'Connection': 'keep-alive',
	'Referer': 'http://222.200.122.171:7771/user/userinfo.aspx'
}

//配置爬虫url和header
borrowedBooks.config = function (reqCookie) {
	header.Cookie = 'sulcmiswebpac=' + reqCookie['sulcmiswebpac']
	return this
};
//爬数据
borrowedBooks.spider = function () {
	//重置搜索结果，防止其返回上一次的搜索结果
	borrowedBookList = []
	superagent.get(url).set(header).end(function (err, res) {
		console.log(err)
		var $ = cheerio.load(res.text),
			order = 1 // 在借图书的次序
		//通过CSS selector来筛选数据
		$('#borrowedcontent tbody tr').each(function (trIndex, trElement) {
			var bookInfoObj = {
				orderNumber: order++
			};
			$(this).find('td').each(function (tdIndex, tdElement) {
				switch (tdIndex) {
				case 0:
					var text = $(this).text(),
						status = text.match(/\S+/g) //匹配非空字符
					console.log(status)
					//status为false，即代表此书既没有超期也没有续满，需手动设置状态为“正常”
					if (!status) {
						bookInfoObj.borrowStatus = '正常'
					} else {
						bookInfoObj.borrowStatus = status[0]
					}
					break
				case 1:
					bookInfoObj.returnDate = $(this).text()
					break
				case 2:
					bookInfoObj.title = $(this).text()
					break
				case 6:
					bookInfoObj.borrowDate = $(this).text()
					break
				}
			});
			//存储所有搜索结果的数组
			borrowedBookList.push(bookInfoObj)
		});
		console.log(borrowedBookList)
		eventEmitter.emit('borrowedBookListHasGotten')
	})
	return this
};
//返回搜索结果
borrowedBooks.getBorrowedBookList = function (req, res) {
	eventEmitter.once('borrowedBookListHasGotten', function () {
		console.log(borrowedBookList)
		res.status(200).json(borrowedBookList)
	})
	return this
}

module.exports = borrowedBooks
