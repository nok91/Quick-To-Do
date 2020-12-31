import isFunction from 'lodash/isFunction';
import controllers from '../room.controllers';

describe('item controllers', () => {
  test('has crud controllers', () => {
    const crudMethods = [
      'getOne',
      'getMany',
      'createOne',
      'removeOne',
      'updateOne'
    ];
    crudMethods.forEach((name) =>
      expect(isFunction(controllers[name])).toBe(true)
    );
  });
});
