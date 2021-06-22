const Koa = require('koa')
const path = require('path')
const app = new Koa()
const staticFiles = require('koa-static')
const cors = require('koa2-cors')

const staticPath = path.join(__dirname + '/micro-app')
app.use(cors());
app.use(staticFiles(staticPath))

app.listen(3001, () => {
    console.log('main server running at 3001')
});