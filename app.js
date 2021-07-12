const Koa = require('koa')
var app = new Koa()
const config = require('./config/config')
const onerror = require('koa-onerror')
const koaWebpack = require('koa-webpack')
const webpackDevConf = require('./build/webpack.dev.conf')
const history = require('koa-history-api-fallback')

//错误信息处理
onerror(app)
app.use(history({
    htmlAcceptHeaders: ['text/html'],
    index: '/index.html',
    verbose: true
}))

// 控制台打印请求信息
app.use(async(ctx, next) => {
    const start = new Date() * 1
    await next()
    const time = new Date() * 1 - start
    const date = new Date().toLocaleString()
    console.log(`${date}: ${ctx.method}: ${ctx.url} - ${time}ms`)
})

// 必须先执行一次内存中才有文件，访问地址才能看到页面，某则报错找不到的页面
koaWebpack({
    config: webpackDevConf
}).then(middleware => {
    // // 开发环境使用webpack编译及热加载插件
    app.use(async(ctx, next) => {
        middleware(ctx, next)
    });
})


app.listen(config.node.port, config.node.host, () => {
    console.log(`listening on http://${config.node.host}:${config.node.port}`)
})
