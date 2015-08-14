import Ember from 'ember';

export default Ember.Controller.extend({
  showAppName: true,
  appName: "Chirper",
  showingComposeModal: false,

  actions: {
    toggleComposeModal: function() {
      // Toggle boolean value
      this.set('showingComposeModal', !this.get('showingComposeModal'));
    }
  }
});
