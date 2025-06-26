import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config(); // load from .env

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: ['src/modules/**/entities/*.ts'],
  migrations: ['src/core/database/migrations/*.ts'],
  synchronize: false,
});
