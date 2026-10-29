# Chad's Frat Party — private Google sign-in + Firebase sync

## Files in this package
- `index.html` — the full dashboard
- `firebase-config.js` — client-side web app configuration + owner UID placeholders
- `firestore.rules` — private security rules (paste into Firebase Console; do not need to upload to GitHub)

## Configure Firebase
1. Open https://console.firebase.google.com and create a Firebase project (or choose an existing one).
2. Under **Project settings > Your apps**, register a **Web app**. Copy its `apiKey`, `authDomain`, `projectId`, and `appId` into `firebase-config.js` (retain the quote marks).
3. Under **Authentication > Sign-in method**, enable **Google**. Under **Authentication > Settings > Authorized domains**, add `YOUR-GITHUB-USERNAME.github.io` (without `https://` or the repository path). Firebase may require you to add this explicitly.
4. Under **Firestore Database**, create a database. Choose a region and begin with locked/production rules, **not open test rules**.
5. Upload the files to GitHub Pages even with the placeholders. Fill in the Firebase web app settings first but leave `OWNER_UID` as the placeholder. Open the live site and click **Sign in with Google**. The banner will display your **Firebase User UID** (also available under Authentication > Users). Copy it.
6. Set `OWNER_UID` to that exact UID in `firebase-config.js`. Replace `REPLACE_WITH_YOUR_FIREBASE_USER_UID` in `firestore.rules` with the same UID, then **publish** the Firestore rules in the Firebase Console.
7. Upload `index.html` and `firebase-config.js` to the root of your GitHub repository. Enable **Settings > Pages > Deploy from branch > main > /(root)**.
8. Open your GitHub Pages URL, sign in with your Google account, and check that cloud status says **Cloud sync active**. Add a test task on one device and confirm it appears on another after signing into the same account.

## Existing data and safety
- Existing browser data migrates automatically when a cloud section has no saved record. If the cloud already contains that section, its data takes precedence. Before first sign-in, **Export Backup** on the browser where your best saved information lives.
- Sign into that device first if you want its locally saved tasks migrated. Other devices will receive its cloud data.
- **Import Backup** replaces cloud data while signed in; **Reset Saved Data** clears synced cloud data too. Both actions affect all signed-in devices.
- Without internet, the browser will retain local changes, but this simple version does **not** guarantee that every offline edit will sync after reconnection. For important edits, reconnect and verify status.
- Google sign-in restricts data by account UID in the security rules. The GitHub Pages website itself remains publicly accessible; its saved content is private.
- Firebase's client configuration is not a password and may be visible in the published website; keep sensitive service account keys out of the repository.
- Browser pop-up blockers may prevent sign-in; allow popups for your GitHub Pages origin.

## Notes
The dashboard's chat is a local canned-reply chat, not a ChatGPT API connection. Cloud sync stores its conversation data.
