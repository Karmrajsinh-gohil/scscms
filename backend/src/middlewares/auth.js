import { verifyFirebaseToken } from '../config/firebaseAdmin.js';

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || '';
    const [scheme, token] = authHeader.split(' ');

    if (scheme !== 'Bearer' || !token) {
      return res.status(401).json({ message: 'Unauthorized: Missing token.' });
    }

    const decodedToken = await verifyFirebaseToken(token);
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email || ''
    };

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token.' });
  }
};
