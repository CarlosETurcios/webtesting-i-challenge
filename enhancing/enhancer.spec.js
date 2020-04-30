const enhancer = require('./enhancer.js');
const { repair } = require('./enhancer');
// test away!

//repair test
describe('testing if the item is repaired', () => {
  describe('testing durability', () => {
    it('goes to 100', () => {
      const equipped = {
        name: 'Master Sword',
        durability: 50,
        enhancement: 20,
      };
      const received = {
        name: 'Master Sword',
        durability: 100,
        enhancement: 20,
      };

      const itemRepair = repair(equipped);

      expect(itemRepair).toEqual(received);
    });
  });
});
