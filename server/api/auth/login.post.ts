import { validateUser } from './_utils'
import { signAccessToken, signRefreshToken } from './_jwt'

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);

  const validationResult = await validateUser(username, password);

  if (!validationResult.isValid) {
    event.node.res.statusCode = 401;
    return { error: 'Invalid credentials' };
  }

  // create real JWT
  const accessToken  = signAccessToken({ username });
  const refreshToken = signRefreshToken({ username });

  // set additional cookie with user data
  setCookie(event, 'user', validationResult.user, {
    httpOnly: false,       // accessible in client
    sameSite: 'lax',
    maxAge: 60 * 60 * 24   // 1 day
  });

  return {
    token: accessToken,
    refreshToken,
    user: validationResult.user
  }
})