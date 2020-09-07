const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const app = express()

app.use(express.static('public'))
app.use(routes)

app.set("view engine", "html", "njk")

nunjucks.configure("views", {
    express: app,
    autoescape: false,
    noCache: true
})

var port = 3000;

app.listen(port, function () {
    console.log('server is running')
})

/*server.listen(5000, function () {
    console.log('server is running')
})*/
