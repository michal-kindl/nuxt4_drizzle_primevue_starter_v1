import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import dotenv from 'dotenv';

import * as schema from "../db/schema";
//import * as relations from "../db/relations";

dotenv.config({ path: ['.env', '.env.development', '../../.env', '../../.env.development'] });
console.log('DATABASE_URL:', process.env.DATABASE_URL!);

const connection = mysql.createPool({
    uri: process.env.DATABASE_URL!,
  });

const db = drizzle({ client: connection, schema: { ...schema /*, ...relations*/ }, mode: 'default' });

export default db; 
