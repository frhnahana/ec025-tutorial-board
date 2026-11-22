// EC025 Tutorial Board settings.
// Edit this file on GitHub (pencil icon), then commit. Render updates the website about a minute later.

window.EC025_CONFIG = {
  // 1. Your Firebase web app settings.
  //    Firebase console > Project settings (gear icon) > General > Your apps > SDK setup and configuration > Config.
  //    Copy each value between the quotes. These values are not secret: the database rules protect your data.
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },

  // 2. The Google account(s) allowed to write worked solutions.
  //    Use the same email(s) in firestore.rules.
  lecturerEmails: ["your.email@gmail.com"]
};
