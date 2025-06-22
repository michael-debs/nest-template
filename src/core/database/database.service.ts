// src/database/drizzle.provider.ts
import { Provider } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from './schema'; // your drizzle schema

export const DATABASE = 'DRIZZLE'; // injection token

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

export const DatabaseProvider: Provider = {
  provide: DATABASE,
  useFactory: async () => {
    await client.connect();
    const db = drizzle(client, { schema });
    return db;
  },
};
