import { eq } from "drizzle-orm";
import { users } from "../../../db/schema";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing operation ID'
    });
  }

  const db = event.context.db; // use the db from the context    
  const body = await readBody(event);
  console.log(body);
  
  const result = await db.update(users).set({ active: body.active }).where(eq(users.id, parseInt(id)));  
  console.log(result);
  console.log('Updated user with ID:', id);

  return { success: true };
})