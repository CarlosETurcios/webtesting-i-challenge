module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    const itemEnhanced = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement + 1,
    };
    return itemEnhanced;
  } else if (item.enhancement === 20) {
    const itemEnhanced = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement,
    };
    return itemEnhanced;
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    const failedItem = {
      name: item.name,
      durability: item.durability - 5,
      enhancement: item.enhancement,
    };
    return failedItem;
  } else if (item.enhancement >= 15 && item.enhancement < 16) {
    const failedItem = {
      name: item.name,
      durability: item.durability - 10,
      enhancement: item.enhancement,
    };

    return failedItem;
  } else if (item.enhancement > 16) {
    const failedItem = {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement - 1,
    };
    return failedItem;
  }
}

function repair(item) {
  const itemRepair = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement,
  };
  return itemRepair;
}

function get(item) {
  return { ...item };
}
