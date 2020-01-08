'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'quiz-radio4000',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // https://console.developers.google.com/apis/credentials/key/2?project=firebase-radio4000
		youtubeApiKey: 'AIzaSyBPY0xzz4PQEl5hgm-wggEA4Zlho11Rtfk',

		// Radio4000 staging project.
		firebase: {
			apiKey: 'AIzaSyAyeuzsaD353IhPbffzvP8EE88HNTwSTY0',
			authDomain: 'radio4000.firebaseapp.com',
			databaseURL: 'https://radio4000.firebaseio.com'
		}
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
