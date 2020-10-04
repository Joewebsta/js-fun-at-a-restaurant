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
  if (restaurant.menus[item.type].includes(item)) return;

  restaurant.menus[item.type].push(item);
}


function removeMenuItem(restaurant, itemName, type) {
  if (!itemExists(restaurant, itemName)) {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  }
  
  let typeArr = restaurant.menus[type];
  let item = typeArr.find(item => item.itemName === itemName);
  let itemIdx = typeArr.indexOf(item);
  
  typeArr.splice(itemIdx, 1);
  
  return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`;
}

function itemExists(restaurant, itemName) {
  let menus = restaurant.menus;
  let exists = false;
  
  for (type in menus) {
    if (menus[type].find(item => item.name === itemName)) {
      exists = true;
    }
  }

  return exists;
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}