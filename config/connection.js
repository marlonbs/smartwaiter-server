const development = {
  database: 'smartwaiter_develop',
  username: 'root',
  password: 'password',
  host: 'localhost',
  dialect: 'mysql' || 'sqlite' || 'postgres',
};

const testing = {
  database: 'smartwaiter_testing',
  username: 'root',
  password: 'password',
  host: 'localhost',
  dialect: 'mysql' || 'sqlite' || 'postgres',
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

module.exports = {
  development,
  testing,
  production,
};
