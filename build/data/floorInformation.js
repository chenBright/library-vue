var express = require('express'),
	events = require('events'),
	superagent = require('superagent')

var eventEmitter = new events.EventEmitter(),
	floorInformation = {},
	floor = [], //存储爬取的图书存放信息
	information = {}, //存储图书完整信息
	floorUrl

//header的json对象
var floorHeader = {
	'Host': 'ifg.zhaobenshu.com:7778',
	'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
	'Accept': '	text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
	'Accept-Language': "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
	'Accept-Encoding': 'gzip, deflate',
	'Connection': 'keep-alive',
	'Access-Control-Request-Method': 'OPTIONS',
	'Access-Control-Request-Headers': 'user-agent',
	'Origin': 'http://222.200.122.171:7771'
}

//数组去重
function trim(arr) {
	console.log(arr)
	var hash = {},
		newArr = []
	for (var i = 0, len = arr.length; i < len; i++) {
		if (!hash[arr[i]]) {
			newArr.push(arr[i])
			hash[arr[i]] = true
		}
	}
	console.log('trim')
	console.log(newArr);
	console.log('trim')
	return newArr
}
//处理楼层信息
function handleFloorInformation(objection) {
	var informationArray = objection['GetSiteByCollStr_list1'],
		floorArray = []
	for (var i = 0, len = informationArray.length; i < len; i++) {
		var value = informationArray[i]
		if (value['Site']) {
			floorArray.push(value['Room'] + value['Site'])
		}
	}
	console.log(floorArray)
	return floorArray
}

//配置爬虫floorUrl和floorHeader
floorInformation.config = function (configObject) {
	var areaUri = '',
		area = trim(configObject.area),
		index = configObject.information.index;
	for (var i = 0, len = area.length; i < len; i++) {
		areaUri += '[#]' + area[i] + '[*]' + index + '[#]'
	}
	floorUrl = 'http://ifg.zhaobenshu.com:7778/Find/GetSiteByCollStr.aspx?a=gdut&b=&c=' + encodeURIComponent(areaUri) + '&d='
	console.log(areaUri)
	information = configObject.information
	return this
};
//爬虫
floorInformation.spider = function () {
	//重置搜索结果，防止其返回上一次的搜索结果
	superagent.get(floorUrl).set(floorHeader).end(function (err, res) {
		var floorInformation = JSON.parse(res.text)
		information.place = handleFloorInformation(floorInformation)
		console.log(floorInformation)
		console.log(1)
		eventEmitter.emit('floorInformationHasGotten')
		console.log(2)
	});
	return this
};
floorInformation.getFloorInformation = function (req, res) {
	eventEmitter.once('floorInformationHasGotten', function () {
		res.status(200).json(information)
	})
}

module.exports = floorInformation
