import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pg

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})



export default pool