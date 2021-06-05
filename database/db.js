import pkg from 'pg';
import * as dotenv from 'dotenv';

dotenv.config({
  path: './.env',
});

const { Pool } = pkg;

const client = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DB_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

client.on('connect', () => console.log('Database connected successfully'));

client.on('error', (err) => console.log(`Error: ${err}`));

export default client;
