import { verifyRefreshToken, signAccessToken } from './_jwt'

export default defineEventHandler(async (event) => {
  const { refreshToken } = await readBody(event)

  try {
    const payload: any = verifyRefreshToken(refreshToken)

    // issue a new access token
    const newAccessToken = signAccessToken({ username: payload.username })

    return { token: newAccessToken }
  } 
  catch (err) {
    event.node.res.statusCode = 401
    return { error: 'Invalid or expired refresh token' }
  }
})
