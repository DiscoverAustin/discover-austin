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
  exports.FACEBOOK_APP_SECRET = 'INSERT_SECRET_FROM_FB_DEVELOPER_CONSOLE!';
  exports.FACEBOOK_APP_ID = 'INSERT_ID_FROM_FB_DEVELOPER_CONSOLE!';
// Development App
} else {
  exports.FACEBOOK_APP_SECRET = 'INSERT_SECRET_FROM_FB_DEVELOPER_CONSOLE!';
  exports.FACEBOOK_APP_ID = 'INSERT_ID_FROM_FB_DEVELOPER_CONSOLE!';
}

exports.GOOGLE_MAPS_API_KEY = 'INSERT_GOOGLE_MAPS_API_KEY!';
