function createRestaurant(name) {
  return {
    name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, item) {
  if (restaurant.menus[item.type].includes(item)) return

  restaurant.menus[item.type].push(item);
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}