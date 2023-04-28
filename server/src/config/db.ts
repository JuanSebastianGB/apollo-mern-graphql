import { connect } from 'mongoose';
import { MONGO_URI } from './config';

export const connectDB = async () =>
  await connect(MONGO_URI)
    .then((conn) => console.log(`Connected to ${conn.connection.name}`))
    .catch((err) => {
      console.error({ err: err.message });
      process.exit(1);
    });
