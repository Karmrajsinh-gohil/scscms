import admin from 'firebase-admin';

let firebaseApp;

export const getFirebaseAdminApp = () => {
  if (firebaseApp) {
    return firebaseApp;
  }

  const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env;

  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) {
    throw new Error('Firebase service account env vars are missing.');
  }

  firebaseApp = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: FIREBASE_PROJECT_ID,
      clientEmail: FIREBASE_CLIENT_EMAIL,
      privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    })
  });

  return firebaseApp;
};

export const verifyFirebaseToken = async (token) => {
  const app = getFirebaseAdminApp();
  return app.auth().verifyIdToken(token);
};
