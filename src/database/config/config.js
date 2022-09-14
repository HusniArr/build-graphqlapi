require('dotenv').config();
module.exports = {
    "development": {
      "username": process.env.USERNAME,
      "password": process.env.PASSWORD,
      "database": process.env.DBDEVELOPMENT,
      "host": process.env.HOSTNAME,
      "dialect": "postgres",
      "use_env_variable":"DEV_DATABASE_URL",
    },
    "test": {
      "username": process.env.USERNAME,
      "password":process.env.PASSWORD,
      "database": process.env.DBTEST,
      "host": process.env.HOSTNAME,
      "dialect": "postgres",
      "use_env_variable":"TEST_DATABASE_URL"
    },
    "production": {
      "username": process.env.USERNAME,
      "password": process.env.PASSWORD,
      "database": process.env.DBPRODUCTION,
      "host": process.env.HOSTNAME,
      "dialect": "postgres",
      "use_env_variable":"DATABASE_URL"
    }
  };

