const { Pool } = require('pg');

require('dotenv').config();

function getPostgresCredentials() {
  const user = process.env.POSTGRES_USER;
  const password = process.env.POSTGRES_PASSWORD;
  const host = process.env.POSTGRES_HOST;
  const port = Number(process.env.POSTGRES_PORT);
  const database = process.env.POSTGRES_DATABASE;

  if (!user || user === '' || user === undefined) {
    console.error('Cannot find POSTGRES_USER');
    throw new Error('Cannot find POSTGRES_USER');
  }

  if (!password || password === '' || password === undefined) {
    console.error('Cannot find POSTGRES_PASSWORD');
    throw new Error('Cannot find POSTGRES_PASSWORD');
  }

  if (!host || host === '' || host === undefined) {
    console.error('Cannot find POSTGRES_HOST');
    throw new Error('Cannot find POSTGRSE_HOST');
  }

  if (!port || port === 0 || port === undefined) {
    console.error('Cannot find POSTGRES_PORT');
    throw new Error('Cannot find POSTGRES_PORT');
  }

  if (!database || database === '' || database === undefined) {
    console.error('Cannot find POSTGRES_DATABASE');
    throw new Error('Cannot find POSTGRES_DATABASE');
  }

  console.log('Connected to database');

  return {
    user,
    password,
    host,
    port,
    database,
  };
}

const pool = new Pool({
  user: getPostgresCredentials().user,
  password: getPostgresCredentials().password,
  host: getPostgresCredentials().host,
  port: getPostgresCredentials().port,
  database: getPostgresCredentials().database,
  // ssl: {
  //     rejectUnauthorized: false,
  // },
});

module.exports = pool;
