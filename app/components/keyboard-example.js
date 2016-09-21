import Ember from 'ember';

const {
  Component,
  inject
} = Ember;


export default Component.extend({
  // Keyboard Service
  keyboard: inject.service('cordova/keyboard'),
  keyboardIsShowing: false,

  didInsertElement() {
    this._super();

    this.get('keyboard').on('keyboardDidShow', this.keyboardDidShow);
    this.get('keyboard').on('keyboardDidHide', this.keyboardDidHide);
  },

  willDestroyElement() {
    this.get('keyboard').off('keyboardDidShow', this.keyboardDidShow);
    this.get('keyboard').off('keyboardDidHide', this.keyboardDidHide);

    this._super();
  },

  keyboardDidShow() {
    this.set('keyboardIsShowing', true);
  },

  keyboardDidHide() {
    this.set('keyboardIsShowing', false);
  }
});
