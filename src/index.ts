import * as dotenv from 'dotenv';
dotenv.config();

import * as Koa from 'koa';
import * as logger from 'koa-logger';

import sequelize from './config/sequelize';
import router from './routes';
import config from './config/config';

const app: Koa = new Koa();

(async () => {
  try {
    await sequelize.authenticate();
    app
      .use(router())
      .use(logger())
      .listen(config.PORT, () =>
        console.log(`Server Listening at port ${config.PORT}`),
      );
  } catch (e) {
    console.error(e);
  }
})();
