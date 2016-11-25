var express = require('express'),
	events = require('events'),
	superagent = require('superagent'),
	cheerio = require('cheerio');

var eventEmitter = new events.EventEmitter(),
	login = {}, //模块
	loginCookie, //登陆成功后的cookie的值
	loginSuccessfully, //登录是否成功；成功为true，否则为false
	loginMsg, //登录信息
	postString, //爬虫post的参数
	url = 'http://222.200.122.171:7771/internalloginAjax.aspx'; //login url
//header的json对象
var header = {
	'Host': '222.200.122.171:7771',
	'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
	'Accept': '	text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
	'Accept-Language': "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
	'Accept-Encoding': 'gzip, deflate',
	'Connection': 'keep-alive',
	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
	'X-Requested-With': 'XMLHttpRequest',
	'X-Prototype-Version': '1.5.0',
	'Referer': 'http://222.200.122.171:7771/internal_login.aspx'
};
//配置爬虫url和header
login.config = function (loginAccount) {
	postString = 'username=' + loginAccount.username + '&password=' + loginAccount.password;
	header['content-length'] = postString.length;
	return this;
};
//爬数据
login.spider = function () {
	superagent.post(url).set(header).send(postString).end(function (err, res) {
		if (!err) {
			console.log(12);
			console.log('cookieArray:' + res.header['set-cookie']);
			loginMsg = res.text;
			if (loginMsg.length == 1) {
				var cookieArray = res.header['set-cookie'],
					cookie = cookieArray[0],
					startIndex = cookie.indexOf('=') + 1,
					endIndex = cookie.indexOf(';');
				loginCookie = encodeURIComponent(cookie.substring(startIndex, endIndex));
				loginMsg = '登录成功';
				loginSuccessfully = true;
			} else {
				if (/\d/.test(loginMsg)) {
					loginMsg = '账号错误';
				} else {
					loginMsg = '密码错误';
				}
				loginSuccessfully = false;
			}
		}
		eventEmitter.emit('loginHasverified');
	});
	return this;
};
login.getLoginStatus = function (req, res) {
	eventEmitter.once('loginHasverified', function () {
		console.log('loginhasverified');
		res.cookie('sulcmiswebpac', loginCookie, {
			path: '/',
			httpOnly: true
		}).status(200).json({
			'loginMsg': loginMsg,
			'loginSuccessfully': loginSuccessfully
		});
	});
};
module.exports = login;
