const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')
const {models} = require('./db')
const { Product } = models

app.use(express.urlencoded())
app.use(express.json())

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/api/products', async(req, res, next) =>{
  try {
  const products = await(Product.findAll())
  res.send(products)
  } catch(ex) {
    next(ex)
  }
})

app.post('/api/products', async(req, res, next) => {
  try {
   const newUser = await Product.create(req.body)
   res.status(201).send(newUser)
  } catch(ex) {
    next(ex)
  }
})

app.delete('/api/products/:id', async (req, res, next) => {
  try {
  const delUser = await Product.destroy({
    where: {
      id: req.params.id
    }

  })
  res.sendStatus(200)
} catch(ex) {
  next(ex)
}
})

app.post('')

app.listen(PORT, () => console.log(`listening on port ${PORT}`) )
