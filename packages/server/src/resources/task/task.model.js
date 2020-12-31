import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: 'dummy task',
      required: true
    },
    completed: {
      type: Boolean,
      default: false,
      required: true
    },
    room: {
      type: mongoose.Schema.Types,
      ref: 'Room',
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('Task', taskSchema);
