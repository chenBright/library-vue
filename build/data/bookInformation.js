var express = require('express'),
	events = require('events'),
	superagent = require('superagent'),
	cheerio = require('cheerio'),
	floorInformation = require('./floorInformation')

var eventEmitter = new events.EventEmitter(),
	bookInfomation = {},
	serachContent, //存储爬虫爬到的html字符串
	bookStatus = [], //存储爬取的图书存放信息
	information = {}, //存储图书完整信息
	url //url参数组成的json对象

//header的json对象
var header = {
	'Host': '222.200.122.171:7771',
	'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
	'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
	'Accept-Language': "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.38",
	'Accept-Encoding': 'gzip, deflate, sdch',
	'Connection': 'keep-alive',
	'Referer': 'http://222.200.122.171:7771/',
	'Cache-Control': 'max-age=0'
}

//配置爬虫url和header
bookInfomation.config = function (id) {
	//重置搜索结果，防止其返回上一次的搜索结果
	bookStatus = []
	serachContent = ''
	url = 'http://222.200.122.171:7771/bookinfo.aspx?ctrlno=' + id
	information = {
		title: '',
		author: '',
		publisher: '',
		date: '',
		index: '',
		place: [],
		collectionStatus: []
	}
	return this
};
//爬虫
bookInfomation.spider = function () {
	//重置搜索结果，防止其返回上一次的搜索结果
	bookStatus = []
	superagent.get(url).set(header).end(function (err, res) {
		var $ = cheerio.load(res.text),
			regExp = /\S+/g //匹配非空字符，以删除空字符
		//通过CSS selector来筛选数据
    var info = $('#ctl00_ContentPlaceHolder1_bookcardinfolbl').text(),
      mainInfo = /(.+)／(.+)—.*：(.+)，([\w\.]+)\s/.exec(info)
    information.title = mainInfo[1].trim()
    information.author = mainInfo[2].slice(0, -1)
    information.publisher = mainInfo[3]
    information.date = mainInfo[4]
		$('tbody tr').each(function (trIndex, trElement) {
			var result = {}
			$(this).find('td').each(function (tdIndex, tdElement) {
				var searchText
				switch (tdIndex) {
				case 0:
					searchText = $(this).text()
					searchText = searchText.match(regExp)
					result.area = searchText[0]
					break
				case 1:
					result.index = $(this).text()
					break
				case 5:
					searchText = $(this).text()
					searchText = searchText.match(regExp)
					if (/\d/.test(searchText[0])) {
						result.status = searchText[0] + searchText[1]
					} else {
						result.status = searchText[0]
					}
					break
				}
			});
			bookStatus.push(result)
		});
		console.log(bookStatus)
		eventEmitter.emit('informationHasGotten')
	});
	return this
};
bookInfomation.getBookInformation = function (req, res) {
	eventEmitter.once('informationHasGotten', function () {
		var area = []
		information.index = bookStatus[0].index
		for (var i = 0, len = bookStatus.length; i < len; i++) {
			area.push(bookStatus[i].area)
			delete bookStatus[i].index
		}
		information.collectionStatus = bookStatus
		floorInformation.config({
			area: area,
			information: information
		}).spider().getFloorInformation(req, res)
	})
}
module.exports = bookInfomation
