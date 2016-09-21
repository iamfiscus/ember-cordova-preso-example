import Ember from 'ember';
import subscribe from 'ember-cordova/utils/subscribe';

const {
  Route,
  inject
} = Ember;

export default Route.extend({
  // Cordova Service
  cordova: inject.service(),

  logReady: subscribe('cordova.deviceready', function() {
    alert('event: deviceready');
  }),

  // Splash Service
  splashScreenService: Ember.inject.service('device/splashscreen'),

  beforeModel() {
    this.get('splashScreenService').show();
  },

  afterModel() {
    this.get('splashScreenService').hide();
  }
});
