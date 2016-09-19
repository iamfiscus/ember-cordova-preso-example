import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  splashScreenService: Ember.inject.service('device/splashscreen'),

  beforeModel() {
    this.get('splashScreenService').show();
  },

  afterModel() {
    this.get('splashScreenService').hide();
  }
  // ...
});
