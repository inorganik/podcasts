import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const universal = functions.https.onRequest((request, response) => {
  console.log('call firebase ssr', process.cwd());
  require(`${process.cwd()}/dist/podcasts11/server/main`).app(request, response);
});
