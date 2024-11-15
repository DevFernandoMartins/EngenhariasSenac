import mysql from 'mysql2/promise';
import { useRuntimeConfig } from '#imports';

export async function createConnection() {
  const config = useRuntimeConfig();
  return await mysql.createConnection({
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName
  });
}