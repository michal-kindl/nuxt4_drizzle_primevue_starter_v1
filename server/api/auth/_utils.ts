// server/api/auth/_utils.ts
import db from '../../db/client';
import md5 from 'md5';

export async function validateUser(username: string, password: string) {
  const pwdHash = md5(password);
  console.log('Validating user:', username, 'with password hash:', pwdHash);
  
  const u = await db.query.users.findFirst({
    where: (users, { eq, and }) => and(eq(users.name, username), eq(users.active, 1))
  });
  
  let user = u ? { ...u } as any: null;
  if (user) {
    delete user.password; // remove password before returning user object
  }

  return { isValid: u?.password === pwdHash, user:  user };
}
