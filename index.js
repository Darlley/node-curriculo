const { openDb } = require('./database/config')

const express = require('express')
const app = express()

openDb()

const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

const metadata = {
  appName: 'Darlley Brito - Currículo',
  appDescription: 'Sou Desenvolvedor Web Full Stack Júnior, UI Designer, SEO e AWS Cloud Pratictioner, veja meu currículo.'
}

// C L I E N T
app.get('/', (req, res) => {
  res.render('home', metadata)
})

// A D M I N 
app.get('/admin', (req, res) => {
  res.render('admin/dashboard', metadata)
})

app.get('/admin/contact', (req, res) => {
  res.render('admin/contact', metadata)
})

app.get('/admin/profile', (req, res) => {
  res.render('admin/profile', metadata)
  
})

app.get('/admin/education', (req, res) => {
  res.render('admin/education', metadata)
})

app.get('/admin/experience', (req, res) => {
  res.render('admin/experience', metadata)
})

app.get('/admin/skills', (req, res) => {
  res.render('admin/skills', metadata)
})

app.get('/admin/languages', (req, res) => {
  res.render('admin/languages', metadata)
})

// const init = async() => {
//   const db = await dbConnection
//   await db.run('create table if not exists profile (id INTEGER PRIMARY KEY, content TEXT);')
// }
// init();

app.listen(port, err => {
  if (err) console.log('error: ' + err)
  if (!err) console.log('app listen in http://localhost:' + port)
})
