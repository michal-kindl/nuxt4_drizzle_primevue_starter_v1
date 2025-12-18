import { relations } from 'drizzle-orm';
import { index, int, mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
  id: int().primaryKey().autoincrement(),
  id_role: int().notNull(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull().unique()
},
(table) => [
  index('idx_users_id_role').on(table.id_role)  
]);

export const usersRelations = relations(users, ({ one }) => ({
	role: one(roles, {
    fields: [users.id_role],
    references: [roles.id],    
  })
}));

export const roles = mysqlTable('roles', {
  id: serial().primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  description: text()
});


