require('dotenv').config();

const Koa = require('koa');
const sequelize = require('../config/sequelize');

const { PORT } = require('../config/config');

const app = new Koa();

(async () => {
  try {
    await sequelize.authenticate();
    app.listen(PORT, () => console.log(`Server Listening at port ${PORT}`));
  } catch (e) {
    console.error(e);
  }
})();
