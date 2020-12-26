import mongoose from 'mongoose';
import Task from '../task.model';

describe('Task model', () => {
  describe('schema', () => {
    test('title', () => {
      const { title } = Task.schema.obj;
      expect(title).toEqual({
        type: String,
        required: true
      });
    });

    test('completed', () => {
      const { completed } = Task.schema.obj;
      expect(completed).toEqual({
        type: Boolean,
        required: true,
        default: false
      });
    });

    test('room', () => {
      const { room } = Task.schema.obj;
      expect(room).toEqual({
        type: mongoose.Schema.Types,
        ref: 'Room',
        required: true
      });
    });
  });
});
