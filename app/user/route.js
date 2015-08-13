// app/user/route.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', 1)
    });
  }
});