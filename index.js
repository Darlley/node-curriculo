const express = require('express')
const app = express()

const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

// C L I E N T
app.get('/', (req, res) => {
  res.render('home', {
    appName: 'Darlley Brito - Currículo',
    appDescription: 'Sou Desenvolvedor Web Full Stack Júnior, UI Designer, SEO e AWS Cloud Pratictioner, veja meu currículo.'
  })
})

// A D M I N 
app.get('/admin', (req, res) => {
  res.render('admin/dashboard', {
    appName: 'Darlley Dev - Experiencia'
  })
})

app.get('/admin/contact', (req, res) => {
  res.render('admin/contact', {
    appName: 'Darlley Dev - Projeto'
  })
})

app.get('/admin/profile', (req, res) => {
  res.render('admin/profile', {
    appName: 'Darlley Dev - Projeto'
  })
})

app.get('/admin/education', (req, res) => {
  res.render('admin/education', {
    appName: 'Darlley Dev - Projeto'
  })
})

app.get('/admin/experience', (req, res) => {
  res.render('admin/experience', {
    appName: 'Darlley Dev - Projeto'
  })
})

app.get('/admin/skills', (req, res) => {
  res.render('admin/skills', {
    appName: 'Darlley Dev - Projeto'
  })
})

app.get('/admin/languages', (req, res) => {
  res.render('admin/languages', {
    appName: 'Darlley Dev - Projeto'
  })
})

app.listen(port, err => {
  if (err) console.log('error: ' + err)
  if (!err) console.log('app listen in http://localhost:' + port)
})
