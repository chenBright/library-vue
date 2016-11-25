// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // '/all/55/1': {
      //   target: 'http://library.chenbright.com/searchbooks?campus=ALL&keyword=js&page=2',
      //   changeOrigin: true
      // },
      // '/all/55/2': {
      //   target: 'http://library.chenbright.com/searchbooks?campus=ALL&keyword=css&page=2',
      //   changeOrigin: true
      // },
      // '/all/55/3': {
      //   target: 'http://library.chenbright.com/searchbooks?campus=ALL&keyword=js&page=3',
      //   changeOrigin: true
      // },
      // '/690679': {
      //   target: 'http://library.chenbright.com/getBookInfomation?bookID=678714&title=Cocos2d-JS%E5%BC%80%E5%8F%91%E4%B9%8B%E6%97%85%20[%E4%B8%93%E8%91%97]%EF%BC%9A%E4%BB%8EHTML%205%E5%88%B0%E5%8E%9F%E7%94%9F%E6%89%8B%E6%9C%BA%E6%B8%B8%E6%88%8F&author=%E9%83%91%E9%AB%98%E5%BC%BA%E8%91%97&publisher=%E7%94%B5%E5%AD%90%E5%B7%A5%E4%B8%9A%E5%87%BA%E7%89%88%E7%A4%BE&date=2015',
      //   changeOrigin: true
      // },
      // '/683949': {
      //   target: 'http://library.chenbright.com/getBookInfomation?bookID=688882&title=HTML+CSS+JavaScript%E7%BD%91%E9%A1%B5%E5%88%B6%E4%BD%9C%E6%A1%88%E4%BE%8B%E6%95%99%E7%A8%8B%20[%E4%B8%93%E8%91%97]&author=%E4%BC%A0%E6%99%BA%E6%92%AD%E5%AE%A2%E9%AB%98%E6%95%99%E4%BA%A7%E5%93%81%E7%A0%94%E5%8F%91%E9%83%A8%E7%BC%96%E8%91%97&publisher=%E4%BA%BA%E6%B0%91%E9%82%AE%E7%94%B5%E5%87%BA%E7%89%88%E7%A4%BE&date=2015',
      //   changeOrigin: true
      // },
      // '/login': {
      //   target: 'http://library.chenbright.com/login?0.46610150642682835',
      //   changeOrigin: true
      // },
      // '/user': {
      //   target: 'http://library.chenbright.com/getBorrowedBooks?0.2770052586978986',
      //   changeOrigin: true
      // }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: true
  }
}
