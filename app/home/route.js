// app/home/route.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      chirps: this.store.query('user', { me: true }).then((users) => {
        return users.get('firstObject').get('chirps')
      })
    });
  },

  // Redirect away from this page if not logged in:
  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('index');
    }
  }
});