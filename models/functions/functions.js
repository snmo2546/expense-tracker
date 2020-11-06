function calculateTotalAmount(records) {
  let totalAmount = 0
  records.forEach(record => {
    totalAmount += record.amount
  })
  return totalAmount
}

function showSelectedFilter(categories, selectedCategory) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].category === selectedCategory) {
      categories.splice(i, 1)
    }
  }
  return categories
}

module.exports = { calculateTotalAmount, showSelectedFilter }