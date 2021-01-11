import path from 'path';
import dotenv from 'dotenv';

const envFound = dotenv.config({
  path: path.join(__dirname,
    process.env.NODE_ENV === 'development' ? '../conf/.env' : {})
});
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  base_url: process.env.BASE_URL,
  port: process.env.PORT,
  db: process.env.MONGO_URI
};