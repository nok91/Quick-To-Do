import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: 'My Tasks',
      required: true,
      maxlength: 50
    }
  },
  { timestamps: true }
);

export default mongoose.model('Room', roomSchema);
