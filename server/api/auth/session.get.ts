export default defineEventHandler((event) => {
  // Return current user information
  return {
    user: getCookie(event, 'user')  || null
  }
})
