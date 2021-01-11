import express from "express";
import loaders from "./loaders";
import config from "./conf/config";
import logger from "./loaders/logger";

async function startServer() {
  const app = express();
  
  await loaders(app);

  app.listen(config.port, () => {
    logger.info('Server listening on port : %o', config.port);
  })
    .on("error", (err) => {
      logger.error(err);
      process.exit(1);
    });
}

startServer();