import { asc } from "drizzle-orm";
import { users } from "../db/schema";

export default defineEventHandler(event => {
  const db = event.context.db; // use the db from the context
  return db.query.users.findMany({
    orderBy: [asc(users.name)]
  });
})