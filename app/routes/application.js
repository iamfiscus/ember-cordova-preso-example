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
  // Platform Service
  platformService: inject.service('device/platform'),

  model: function(){
    return {
      group: 'World',
      platforms: this.get('platformService').platforms
    };
  }
});
