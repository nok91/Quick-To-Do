import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 50
    }
  },
  { timestamps: true }
);

export default mongoose.model('Room', roomSchema);
