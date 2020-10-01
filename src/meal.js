function nameMenuItem(foodName) {
  return `Delicious ${foodName}`;
}

function createMenuItem(name, price, type) {
  return {
    name,
    price,
    type
  };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


