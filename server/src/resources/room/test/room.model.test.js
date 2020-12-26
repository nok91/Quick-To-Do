import Room from '../room.model';

describe('Room model', () => {
  describe('schema', () => {
    test('title', () => {
      const { title } = Room.schema.obj;
      expect(title).toEqual({
        type: String,
        required: true,
        maxlength: 50
      });
    });
  });
});
