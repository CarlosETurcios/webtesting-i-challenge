const enhancer = require('./enhancer.js');
const { repair, succeed, fail } = require('./enhancer');
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
describe('testing for success enhancement', () => {
  it('it adds + 1', () => {
    const inhanced = {
      name: 'Master Sword',
      durability: 100,
      enhancement: 19,
    };
    //this is what you want it to be
    const inhancedItem = {
      name: 'Master Sword',
      durability: 100,
      enhancement: 20,
    };
    const itemEnhanced = succeed(inhanced);

    expect(itemEnhanced).toEqual(inhancedItem);
  });
});
describe('if the enhancment is already 20 it remains at 20', () => {
  it('enhancment remains at 20', () => {
    const inhanced = {
      name: 'Master Sword',
      durability: 100,
      enhancement: 20,
    };
    // this is what you want it to be
    const inhancedItem = {
      name: 'Master Sword',
      durability: 100,
      enhancement: 20,
    };
    const itemEnhanced = succeed(inhanced);

    expect(itemEnhanced).toEqual(inhancedItem);
  });
});
describe('"FAILED" if enhancemnt is less than 15 supbtract 5', () => {
  it('subtracts 5', () => {
    const failed = {
      name: 'Master Sword',
      durability: 100,
      enhancement: 14,
    };
    const subtractItem = {
      name: 'Master Sword',
      durability: 95,
      enhancement: 14,
    };
    const failedItem = fail(failed);
    expect(failedItem).toEqual(subtractItem);
  });
});
describe('failed', () => {
  it('subtracts 10 from durabilty', () => {
    const actual = {
      name: 'Master Sword',
      durability: 100,
      enhancement: 15,
    };
    const expected = {
      name: 'Master Sword',
      durability: 90,
      enhancement: 15,
    };
    const failedItem = fail(actual);
    expect(failedItem).toEqual(expected);
  });
});

describe('failed', () => {
  it('subtracts 1 from enhancment', () => {
    const actual = {
      name: 'Master Sword',
      durability: 100,
      enhancement: 18,
    };
    const expected = {
      name: 'Master Sword',
      durability: 100,
      enhancement: 17,
    };
    const failedItem = fail(actual);
    expect(failedItem).toEqual(expected);
  });
});
