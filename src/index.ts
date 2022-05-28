require('dotenv').config();

const Koa = require('koa');
const logger = require('koa-logger')

const sequelize = require('./config/sequelize');
const { PORT } = require('./config/config');

const app = new Koa();

(async () => {
  try {
    await sequelize.authenticate();
    app
    .use(logger())
    .listen(PORT, () => console.log(`Server Listening at port ${PORT}`));
  } catch (e) {
    console.error(e);
  }
})();
