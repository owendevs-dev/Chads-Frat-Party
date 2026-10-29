// Firebase Console > Project settings > Your apps > Web app > SDK setup and configuration
// These client-side settings are not secret. Security is enforced by Firestore rules.
export const firebaseConfig = {
  apiKey: 'REPLACE_WITH_API_KEY',
  authDomain: 'REPLACE_WITH_PROJECT.firebaseapp.com',
  projectId: 'REPLACE_WITH_PROJECT_ID',
  appId: 'REPLACE_WITH_APP_ID',
};
// Firebase Console > Authentication > Users > User UID after your first Google sign-in
export const OWNER_UID = 'REPLACE_WITH_YOUR_FIREBASE_USER_UID';
