const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const livros = require("./db.json")

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})

server.get('/', function (req, res) {
    return res.render("index")
})

server.get('/biblioteca', function (req, res) {
    return res.render("biblioteca")
})

server.get('/categorias', function (req, res) {
    return res.render("categoria")
})

server.get('/indicados', function (req, res) {
    return res.render("indicados")
})

server.get('/atividades', function (req, res) {
    return res.render("atividades")
})

server.get('/favoritos', function (req, res) {
    return res.render("favoritos")
})

server.get('/meus-ebooks', function (req, res) {

    return res.render("meus-ebooks.html")
})

server.get('/conquistas', function (req, res) {

    return res.render("conquistas")
})


server.get('/busca', function (req, res) {

    return res.render("busca.html")
})

server.get('/buscaporvoz', function (req, res) {

    return res.render("buscaporvoz")
})

server.listen(5000, function () {
    console.log('server is running')
})
