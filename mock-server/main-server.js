// main-server.js
const Koa = require('koa')
const path = require('path')
const app = new Koa()
const staticFiles = require('koa-static')

const staticPath = path.join(__dirname + '/main-app')

app.use(staticFiles(staticPath))

app.listen(3000, () => {
    console.log('main server running at 3000')
});
