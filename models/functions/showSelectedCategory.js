function showSelectedFilter(categories, selectedCategory) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].categoryName === selectedCategory) {
      categories.splice(i, 1)
    }
  }
  return categories
}

module.exports = showSelectedFilter