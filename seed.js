const { db, models } = require('./db')
const { Product } = models

const seed  = async() => {
 await db.sync({force: true})
 await Product.create({name: 'bar'})
 await Product.create({name: 'foo'})
}

seed()

