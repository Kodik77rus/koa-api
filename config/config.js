module.exports = {
  PORT: process.env.PORT || 8080,
  SEQUELIZE: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    logging: false,
  },
};
