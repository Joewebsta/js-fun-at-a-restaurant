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

function addIngredients(ingredient, array) {
  if (!array.includes(ingredient)) {
    array.push(ingredient);  
  }
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return price * .9;
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}


