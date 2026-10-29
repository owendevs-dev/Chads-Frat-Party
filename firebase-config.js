// Replace the placeholder values with your Firebase project's Web App config.
// Web app config is public identification, NOT a secret. Keep your Firestore rules secure.
export const firebaseConfig = {
  apiKey: 'REPLACE_WITH_API_KEY',
  authDomain: 'REPLACE_WITH_PROJECT_ID.firebaseapp.com',
  projectId: 'REPLACE_WITH_PROJECT_ID',
  storageBucket: 'REPLACE_WITH_PROJECT_ID.firebasestorage.app',
  messagingSenderId: 'REPLACE_WITH_SENDER_ID',
  appId: 'REPLACE_WITH_APP_ID'
};
// Your Firebase Authentication -> Users -> User UID (not your email address).
export const OWNER_UID = 'REPLACE_WITH_YOUR_FIREBASE_AUTH_UID';
