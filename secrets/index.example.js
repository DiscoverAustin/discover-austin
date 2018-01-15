/*
============= INSTRUCTIONS =============
  1. Register your app on Facebook's Developer console (https://developers.facebook.com/apps/)
  2. Insert your Facebook 'App ID' && 'App Secret' below
  3. Create a 'project' for your app on Google's Developer console and obtain an API Key (https://developers.google.com/maps/documentation/javascript/get-api-key)
  4. Insert Google Maps API key below
  3. Resave this file as index.js
*/

// Production App
if (process.env.NODE_ENV === 'production') {
  exports.FACEBOOK_APP_SECRET = '562f4f16c26187d72ba94f1ee79b73c2';
  exports.FACEBOOK_APP_ID = '158798504768218';
// Development App
} else {
  exports.FACEBOOK_APP_SECRET = '99722e8a2da890af65ab464852b3d2e2';
  exports.FACEBOOK_APP_ID = '158163551574274';
}

exports.GOOGLE_MAPS_API_KEY = 'INSERT_GOOGLE_MAPS_API_KEY!';
