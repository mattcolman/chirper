// app/user/following/route.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    // Fetch the username from the URL
    var username = transition.params.user.username;

    return Ember.RSVP.hash({
      users: this.store.query('user', { follower: username })
    });
  }
});