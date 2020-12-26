import mongoose from 'mongoose';

function connect(url = process.env.MONGODB_URI, opts = {}) {
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

export default connect;
