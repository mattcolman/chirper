import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(), // This lets us access the application controller's actions

  actions: {
    openComposeModal: function() {
      this.get('application').send('toggleComposeModal');
    }
  }
});
