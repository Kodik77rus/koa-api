import { Dialect } from 'sequelize';
import { Config } from '../types';

const config: Config = {
  PORT: +process.env.PORT || 8080,
  SEQUELIZE: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    dialect: process.env.POSTGRES_DIALECT as Dialect,
    logging: JSON.parse(process.env.POSTGRES_LOGGING),
  },
};

export default config;
