const express = require('express')
const app = express()

const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    appName: 'Darlley Dev - Currículo'
  })
})
app.get('/experiencia', (req, res) => {
  res.render('experiencia', {
    appName: 'Darlley Dev - Experiencia'
  })
})

app.get('/projeto', (req, res) => {
  res.render('projeto', {
    appName: 'Darlley Dev - Projeto'
  })
})

app.get('/curso', (req, res) => {
  res.render('curso', {
    appName: 'Darlley Dev - Curso'
  })
})

app.listen(port, err => {
  if (err) console.log('error: ' + err)
  if (!err) console.log('app listen in http://localhost:' + port)
})
