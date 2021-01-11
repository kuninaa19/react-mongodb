import redisLoader from './redis';
import expressLoader from './express';
import mongooseLoader from './mongoose';

export default async (app) => {
    await mongooseLoader();
    await redisLoader(app);
    await expressLoader(app);
}