# EC025 Tutorial Board

Interactive tutorial website for **EC025 Chemistry 2** (Semester 2, Session 2026/2027).
Every question from the tutorial book (Chapters 1 to 12, including PSPM past-year questions) opens on its own whiteboard. The lecturer writes worked solutions with a stylus, and students view them after class. Each section also has a class forum for reflections.

- **Hosting:** Render (free static site, deploys automatically from this repository)
- **Saved writing and forum:** Firebase (free Spark plan: Cloud Firestore + Google sign-in)

## What each file does

| File | What it is |
| --- | --- |
| `index.html` | The whole website: layout, colours, whiteboard and forum |
| `config.js` | **Your settings:** Firebase keys and the lecturer email(s) |
| `firestore.rules` | Database security rules to paste into Firebase |
| `data.json` | Chapter, section and question list |
| `questions-ch01.json` … `questions-ch12.json` | Question images from the tutorial book, one file per chapter |
| `ref-*.png`, `ref-*.jpg` | Data sheet pages (E° values, atomic masses, constants) |
| `firebase.js` | Firebase connection (bundled Firebase JS SDK 12.19.0, Apache-2.0 licence) |
| `favicon.svg`, `apple-touch-icon.png` | Icons for the browser tab and the iPad home screen |

## First-time setup (summary)

1. **Firebase:** create a project, then:
   - turn on Google sign-in
   - create a Firestore database (production mode, region `asia-southeast1`)
   - paste `firestore.rules` (with your email) and publish
   - register a web app and copy its config
2. **GitHub:** fill in `config.js` with the Firebase config and your email.
3. **Render:** New > Static Site > connect this repository. Leave Build Command empty and set Publish Directory to `.` (a single dot).
4. **Firebase:** add your Render address (for example `ec025-tutorial-board.onrender.com`) under Authentication > Settings > Authorized domains.
5. **iPad:** open the Render address in Safari, Share > Add to Home Screen, then sign in with Google.

The full step-by-step guide is in the shared setup document.

## Changing the website later

- **Small text or colour changes:** open `index.html` on GitHub, press the pencil icon, edit, then **Commit changes**. Render redeploys in about a minute.
- **Add another lecturer:** add their email in both `config.js` and `firestore.rules`, and publish the rules again in Firebase.
- **Bigger changes:** describe them to Claude with this repository attached.

Writing and forum posts live in Firebase, not in this repository, so editing or redeploying the website never erases them.
