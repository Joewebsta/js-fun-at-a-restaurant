class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(customerName, morning=false) {
    let greeting = morning ? `Good morning, ${customerName}!` : `Hello, ${customerName}!`
    return greeting;
  }

  checkForFood(foodItem) {
    let menus = this.restaurant.menus;
    let onMenu = false;

    for (let type in menus) {      
      if (menus[type].includes(foodItem)) {
        onMenu = true;
        break;
      }
    }
    
    if (onMenu) {
      return `Yes, we're serving ${foodItem.name} today!`
    } else {
      return `Sorry, we aren't serving ${foodItem.name} today.`
    }
  }
}

module.exports = Chef;