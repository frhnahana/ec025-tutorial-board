// EC025 Tutorial Board settings.
// Edit this file on GitHub (pencil icon), then commit. Render updates the website about a minute later.

window.EC025_CONFIG = {
  // Firebase web app settings (Firebase console > Project settings > General > Your apps).
  // These values are not secret: the database rules protect your data.
  firebase: {
    apiKey: "AIzaSyDpAIKRLSeRLVvAAm46hTW4DYIj-Pdu0dQ",
    authDomain: "ec025-tutorial-board.firebaseapp.com",
    projectId: "ec025-tutorial-board",
    storageBucket: "ec025-tutorial-board.firebasestorage.app",
    messagingSenderId: "623028561497",
    appId: "1:623028561497:web:51fbc83d49995ba4153348"
  },

  // The Google account(s) allowed to write worked solutions.
  // Use the same email(s) in firestore.rules.
  lecturerEmails: ["frhna.kha@gmail.com"]
};
