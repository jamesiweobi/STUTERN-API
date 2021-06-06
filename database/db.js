import pkg from 'pg';
import * as dotenv from 'dotenv';
const { Pool } = pkg;
dotenv.config();

const proConfig = {
  connectionString: process.env.DATABASE_URL, //This will be coming from heroku add-on
};

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
};

const client = new Pool(
  process.env.NODE_ENV === 'production' ? proConfig : devConfig
);

client.on('connect', () => console.log('Database connected successfully'));

client.on('error', (err) => console.log(`Error: ${err}`));

export default client;
