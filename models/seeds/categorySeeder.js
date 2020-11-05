// include packages and modules
const Category = require('../category')
const db = require('../../config/mongoose')

db.once('open', () => {
  Category.create(
    {
      category: '家居物業',
      categoryIcon: '<i class="fas fa-home"></i>'
    },
    {
      category: '交通出行',
      categoryIcon: '<i class="fas fa-shuttle-van"></i>'
    },
    {
      category: '休閒娛樂',
      categoryIcon: '<i class="fas fa-grin-beam"></i>'
    },
    {
      category: '餐飲食品',
      categoryIcon: '<i class="fas fa-utensils"></i>'
    },
    {
      category: '其他',
      categoryIcon: '<i class="fas fa-pen"></i>'
    }
  ).then(() => {
    console.log('Category seed data has been added!')
    return db.close()
  }).then(() => {
    console.log('db connection close')
  })
})