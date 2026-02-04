import { verifyAccessToken } from '../api/auth/_jwt'

export default defineEventHandler((event) => {
  const token = getHeader(event, 'authorization')?.replace(/^Bearer\s/, '')

  if (!token) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }

  try {
    verifyAccessToken(token)
  } 
  catch {
    throw createError({ statusCode: 401, statusMessage: 'Invalid token' })
  }
})
