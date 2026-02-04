import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({ path: ['.env', '.env.development', '../../../.env', '../../../.env.development'] });

const ACCESS_SECRET  = process.env.JWT_ACCESS_SECRET  || 'dev_secret_access';
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'dev_refresh_secret';

console.log('JWT_ACCESS_SECRET:', ACCESS_SECRET);
console.log('JWT_REFRESH_SECRET:', REFRESH_SECRET);

// 15 min access token
export function signAccessToken(payload: any) {
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: '15m' });
}

// 7 day refresh token
export function signRefreshToken(payload: any) {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: '7d' });
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, ACCESS_SECRET);
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, REFRESH_SECRET);
}
