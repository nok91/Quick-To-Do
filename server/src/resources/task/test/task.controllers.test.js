import isFunction from 'lodash/isFunction';
import controllers, { getOneTask } from '../task.controllers';

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
    expect(isFunction(getOneTask)).toBe(true);
  });
});
