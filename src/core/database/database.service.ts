import { Provider } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

export const DATABASE = 'DRIZZLE';

const client = new Client({
  connectionString: 'postgresql://root:root@localhost:5432/test',
});

export const DatabaseProvider: Provider = {
  provide: DATABASE,
  useFactory: async () => {
    await client.connect();
    const db = drizzle(client);
    return db;
  },
};
