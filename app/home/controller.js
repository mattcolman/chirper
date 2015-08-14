// app/home/controller.js

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    openComposeModal: function() {
      this.get('controllers.application').send('toggleComposeModal');
    },
    // Our new logout action:
    logout: function() {
      this.get('session').invalidate();
      this.transitionToRoute('index');
    }
  }
});