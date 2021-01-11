import mongoose from 'mongoose';
import config from '../conf/config';
import logger from '../loaders/logger';

export default async () => {
  const connection = await mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => logger.info('Successfully connected to mongodb'))
    .catch(e => logger.error(e));

  return connection;
};