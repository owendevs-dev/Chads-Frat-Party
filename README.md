# Chad's Frat Party — Personal PWA

This is a PWA-ready conversion of the uploaded HTML dashboard. It preserves weather, tasks, event suggestions, script suggestions, built-in chat, backup/import, and the existing Firebase sync mechanism.

## 1. Try it locally

Do not open `index.html` as a `file://` page: the Firebase ES module and PWA service worker require an HTTP(S) origin. From this folder run `python -m http.server 8000` and visit `http://localhost:8000` on the same computer. Offline support works after the initial online visit; weather and Google sign-in require a connection.

## 2. Firebase setup

1. Create a Firebase project at https://console.firebase.google.com/.
2. Add a Web App in Project settings. Copy its config values into `firebase-config.js`.
3. Under Authentication > Sign-in method, enable **Google**.
4. In Authentication > Settings > Authorized domains, add your eventual GitHub Pages domain (`YOURNAME.github.io`). For local testing, add `localhost` if necessary.
5. Create a **Cloud Firestore** database in your preferred region.
6. First sign in once so your Google account appears in Firebase Authentication > Users. Copy your **User UID**.
7. Replace `REPLACE_WITH_YOUR_FIREBASE_AUTH_UID` with the UID in **both** `firebase-config.js` and `firestore.rules`.
8. Publish the included `firestore.rules` under Firestore Database > Rules. These restrict access to that UID. Never publish permissive test-mode rules.
9. Commit and redeploy the updated `firebase-config.js`. Sign in again and confirm the UI shows cloud sync active.

Firebase web-app config is designed to be embedded in public websites. It is **not** a security barrier. Security depends on Firebase Authentication plus deployed Firestore security rules.

## 3. GitHub Pages

1. Make a GitHub repository; upload the files and `icons/` directory at repository root.
2. Go to Settings > Pages > Build and deployment > Deploy from a branch. Select `main` and `/ (root)`.
3. Your site will be available at `https://YOURNAME.github.io/REPOSITORY/` (or the root domain if repository is named `YOURNAME.github.io`).
4. Add `YOURNAME.github.io` to Firebase Auth authorized domains. Google popup sign-in must be tested on mobile; browser restrictions sometimes affect popups.
5. On iPhone, open the URL in Safari > Share > Add to Home Screen. On Android, use Chrome > Install app / Add to Home screen. Desktop browsers may show an install icon.

## Important behavior

- You can use tasks, built-in chat and suggestions offline after first load; weather needs the internet. Firebase does not sync while signed out.
- This version keeps the existing browser-local backup/import and all data. **Export a backup before signing in on a second device** if you already have independent data there. The first cloud copy can override local browser data.
- The chat tile uses predefined responses; it is **not** connected to ChatGPT.
- The existing Firestore implementation syncs each data section as a whole. Simultaneous changes to the same to-do list from two devices may overwrite each other. Avoid concurrent editing until an item-level sync model is implemented.
- Update the `CACHE_NAME` in `sw.js` when you ship a release that must replace offline assets.
- This package was generated and structurally checked, but Firebase authentication and hosted-device behavior cannot be verified without your project settings and a live deployment.
