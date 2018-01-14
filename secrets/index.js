// Production App
if (process.env.NODE_ENV === 'production') {
  exports.FACEBOOK_APP_SECRET = '99722e8a2da890af65ab464852b3d2e2';
  exports.FACEBOOK_APP_ID = '158163551574274';
// Development App
} else {
  exports.FACEBOOK_APP_SECRET = 'ac9001d0a12b4694241020772ac1286b';
  exports.FACEBOOK_APP_ID = '190066694908443';
}

exports.GOOGLE_MAPS_API_KEY = 'INSERT_GOOGLE_MAPS_API_KEY!';
