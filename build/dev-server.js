require('./check-versions')()
var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = config.dev.env
var path = require('path')
var express = require('express')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var bodyParser = require('body-parser')
var webpack = require('webpack')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

//路由文件
var books = require('./data/books'),
  bookInfomation = require('./data/bookInformation'),
  login = require('./data/login'),
  borrowedBooks = require('./data/borrowedBooks')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cookieParser())
app.use(session({
  secret: 'search',
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 31 * 24 * 60 * 60 * 1000
  }
}))

//路由
app.get('/:campus/:keywords/:page', function (req, res) {
  console.log('searchbooks');
  if (req.session.searchPageNumber) {
    req.session.searchPageNumber = 1
  }
  let params = req.params,
    campus = params.campus,
    keywords = params.keywords,
    page = params.page
  books.config(campus, keywords, page).spider().getBookList(req, res);
});
app.get('/:id', function (req, res) {
  console.log('getBookInfo')
  console.log(req.params.id)
  bookInfomation.config(req.params.id).spider().getBookInformation(req, res)
})
app.post('/login', function (req, res) {
  console.log('login')
  console.log(req.body)
  console.log(req.cookies)
  login.config(req.body).spider().getLoginStatus(req, res)
})
app.get('/getBorrowedBooks', function (req, res) {
  console.log('getBorrowedBooks')
  console.log(req.cookies)
  borrowedBooks.config(req.cookies).spider().getBorrowedBookList(req, res)
})
app.get('/deleteCookie', function (req, res) {
  console.log('deleteCookie')
  console.log(req.cookies)
  res.clearCookie('sulcmiswebpac').status(200).send('cookie清除成功')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
