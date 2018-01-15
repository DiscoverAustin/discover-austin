// Development App
if (process.env.NODE_ENV === 'development') {
  exports.FACEBOOK_APP_SECRET = '99722e8a2da890af65ab464852b3d2e2';
  exports.FACEBOOK_APP_ID = '158163551574274';
// Production App
} else {
  exports.FACEBOOK_APP_SECRET = '562f4f16c26187d72ba94f1ee79b73c2';
  exports.FACEBOOK_APP_ID = '158798504768218';
}

exports.GOOGLE_MAPS_API_KEY = 'INSERT_GOOGLE_MAPS_API_KEY!';
