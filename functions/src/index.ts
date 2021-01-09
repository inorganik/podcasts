import * as functions from 'firebase-functions';
import * as path from 'path';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// export const universal = functions.https.onRequest((request, response) => {
//   require(`${process.cwd()}/dist/podcasts11/server/main`).app(request, response);
// });

const ssr = require(path.resolve(__dirname, '../dist/podcasts11/server/main')).app();
export const universal = functions.https.onRequest(ssr);
