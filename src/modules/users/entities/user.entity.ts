// schema.ts
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const UserSchema = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull(),
  password: text('password').notNull(),
});
