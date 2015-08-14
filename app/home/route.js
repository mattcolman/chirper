// app/home/route.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', 1), // <-- This line can now be removed since we're using session.currentUser instead
      chirps: this.store.findAll('chirp')
    });
  },

  // Redirect away from this page if not logged in:
  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
  }
});