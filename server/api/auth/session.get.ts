import { verifyAccessToken } from './_jwt'

export default defineEventHandler((event) => {
  try {

    console.log('Session check initiated');

    // Get token from Authorization header
    const token = getHeader(event, 'authorization')?.replace(/^Bearer\s/, '')
    
    if (!token) {
      console.log('Session check failed: No token provided');
      return {
        user: null
      }
    }

    // Verify token validity
    const decoded = verifyAccessToken(token);

    console.log('Session check decoded token:', decoded);
    // Return user data if token is valid
    return {
      user: decoded || getCookie(event, 'user') || null
    }
  } catch (error) {
    // Return null user if token is invalid
    return {
      user: null
    }
  }
})
