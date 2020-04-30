module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
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
