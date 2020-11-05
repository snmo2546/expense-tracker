// include packages and modules
const Record = require('../record')
const db = require('../../config/mongoose')

db.once('open', () => {
  Record.create(
    {
      name: '房租',
      date: '2020-10-29',
      category: '家居物業',
      categoryIcon: '<i class="fas fa-home"></i>',
      amount: 22000,
    },
    {
      name: '電影：鬼滅之刃',
      date: '2020-10-31',
      category: '休閒娛樂',
      categoryIcon: '<i class="fas fa-grin-beam"></i>',
      amount: 1000,
    },
    {
      name: '加油錢',
      date: '2020-10-27',
      category: '交通出行',
      categoryIcon: '<i class="fas fa-shuttle-van"></i>',
      amount: 1500,
    },
    {
      name: 'Retro Mojo Coffee',
      date: '2020-10-31',
      category: '餐飲食品',
      categoryIcon: '<i class="fas fa-utensils"></i>',
      amount: 800,
    },
    {
      name: 'iPhone 12 Pro 太平洋藍',
      date: '2020-10-23',
      category: '其他',
      categoryIcon: '<i class="fas fa-pen"></i>',
      amount: 37400,
    },
  ).then(() => {
    console.log('Record seed data has been added!')
    return db.close()
  }).then(() => {
    console.log('db connection close')
  })

})