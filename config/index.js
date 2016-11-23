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
      '/all/55/1': {
        target: 'http://library.chenbright.com/searchbooks?campus=ALL&keyword=js&page=1',
        changeOrigin: true
      },
      '/all/55/2': {
        target: 'http://library.chenbright.com/searchbooks?campus=ALL&keyword=js&page=2',
        changeOrigin: true
      },
      '/all/55/3': {
        target: 'http://library.chenbright.com/searchbooks?campus=ALL&keyword=js&page=3',
        changeOrigin: true
      },
      '/book': {
        target: 'http://library.chenbright.com/getBookInfomation?bookID=678714&title=Cocos2d-JS%E5%BC%80%E5%8F%91%E4%B9%8B%E6%97%85%20[%E4%B8%93%E8%91%97]%EF%BC%9A%E4%BB%8EHTML%205%E5%88%B0%E5%8E%9F%E7%94%9F%E6%89%8B%E6%9C%BA%E6%B8%B8%E6%88%8F&author=%E9%83%91%E9%AB%98%E5%BC%BA%E8%91%97&publisher=%E7%94%B5%E5%AD%90%E5%B7%A5%E4%B8%9A%E5%87%BA%E7%89%88%E7%A4%BE&date=2015',
        changeOrigin: true
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: true
  }
}
