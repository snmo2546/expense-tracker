// include packages and modules
const bcrypt = require('bcryptjs')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const Record = require('../record')
const User = require('../user')
const db = require('../../config/mongoose')

const SEED_USER = {
  name: 'Kay',
  email: 'kay@example.com',
  password: '123'
}

db.once('open', () => {
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER.password, salt))
    .then(hash => User.create({
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: hash
    }))
    .then(user => {
      const userId = user._id
      return Promise.all(Array.from(
        { length: 1 },
        (_, i) => Record.create(
          {
            name: '房租',
            date: '2020-10-29',
            category: '家居物業',
            categoryIcon: '<i class="fas fa-home"></i>',
            amount: 22000,
            userId
          },
          {
            name: '電影：鬼滅之刃',
            date: '2020-10-31',
            category: '休閒娛樂',
            categoryIcon: '<i class="fas fa-grin-beam"></i>',
            amount: 1000,
            merchant: '威秀影城',
            userId
          },
          {
            name: '加油錢',
            date: '2020-10-27',
            category: '交通出行',
            categoryIcon: '<i class="fas fa-shuttle-van"></i>',
            amount: 1500,
            merchant: '中油',
            userId
          },
          {
            name: 'Retro Mojo Coffee',
            date: '2020-10-31',
            category: '餐飲食品',
            categoryIcon: '<i class="fas fa-utensils"></i>',
            amount: 800,
            merchant: 'Retro Mojo Coffee',
            userId
          },
          {
            name: 'iPhone 12 Pro 太平洋藍',
            date: '2020-10-23',
            category: '其他',
            categoryIcon: '<i class="fas fa-pen"></i>',
            amount: 37400,
            merchant: 'Apple',
            userId
          }
        )
      ))
    })
    .then(() => {
      console.log('Record seed data has been added!')
      return db.close()
    })
    .catch(err => console.log(err))
})