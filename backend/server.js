const express = require('express')
const routes = require('./routes')
const PORT = process.env.PORT || 3001
const app = express()
const db = require('./models')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'))
}

app.use(routes)

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('Listening on PORT ' + PORT)
  })
})
