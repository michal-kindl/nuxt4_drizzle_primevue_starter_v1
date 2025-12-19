import { mysqlTable, mysqlSchema, AnyMySqlColumn, primaryKey, unique, serial, varchar, text, index, int, tinyint } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const roles = mysqlTable("roles", {
	id: serial().notNull(),
	name: varchar({ length: 255 }).notNull(),
	description: text(),
},
(table) => [
	primaryKey({ columns: [table.id], name: "roles_id"}),
	unique("id").on(table.id),
]);

export const users = mysqlTable("users", {
	id: int().autoincrement().notNull(),
	idRole: int("id_role").notNull(),
	name: varchar({ length: 255 }).notNull(),
	age: int().notNull(),
	email: varchar({ length: 255 }).notNull(),
	active: tinyint().default(1),
},
(table) => [
	index("idx_users_id_role").on(table.idRole),
	primaryKey({ columns: [table.id], name: "users_id"}),
	unique("users_email_unique").on(table.email),
]);
