const express = require('express')
const routes = express.Router()

/* Rotas do MVP*/

routes.get('/', function (req, res) {
  return res.render("biblioteca")
})

routes.get('/meus-ebooks', function (req, res) {

  return res.render("meus-ebooks")
})

routes.get('/stickers', function (req, res) {
  return res.render("stickerspage")
})

routes.get('/buscaporvoz', function (req, res) {
  return res.render("buscaporvoz")
})


/* Rotas de Mock da Árvore*/
routes.get('/inicio', function (req, res) {
  return res.render("index")
})

routes.get('/indicados', function (req, res) {
  return res.render("indicados")
})

routes.get('/atividades', function (req, res) {
  return res.render("atividades")
})

routes.get('/favoritos', function (req, res) {
  return res.render("favoritos")
})

routes.get('/conquistas', function (req, res) {
  return res.render("conquistas")
})

module.exports = routes