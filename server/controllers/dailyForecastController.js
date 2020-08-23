"use strict";

//========================================
// Route which lists cities available
// I would make the mongose call here
//========================================
exports.list = function(body, callback) {
  return callback(null, 200, {
    ok: true,
    cities: {
        "Sydney": { lat: '-33.8688', lon: '151.2093' },
        "Brisbane": { lat: '-27.4698', lon: '153.0251' },
        "Melbourne": { lat: '-37.8136', lon: '144.9631' },
        "Snowy Mountains": { lat: '-36.5000', lon: '148.3333' }
        }
  });
};
