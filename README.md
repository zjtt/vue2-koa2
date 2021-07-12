# intro

vue2 + wepback4 + koa2搭建的一个路由使用history模式的demo

## 运行
开发
```
npm start
```

测试环境打包
```
npm run build:staging
```
正式环境打包
```
npm run build:prod
```

## 插件
### koa-history-api-fallback

开发的时候路由使用history模式，在根路由或子路由刷新页面也没问题

但是打包后用koa启动服务，在根路由刷新页面没问题，但是在子路由刷新页面会报错：找不到页面

所以使用koa-history-api-fallback

### extract-text-webpack-plugin
把js中import的css提取出来，不能提取@import，只能提取import

### koa-webpack
封装了webpack-dev-middleware和webpack-hot-client两个插件

[wepback-hot-middleware与webpack-hot-client区别](https://github.com/webpack-contrib/webpack-hot-client/issues/18)

[参考博客](https://www.jianshu.com/p/c6859a6d4e7e)
