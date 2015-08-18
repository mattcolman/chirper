// app/home/route.js

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //console.log('hi', this.get('session.currentUser.id'));
    return Ember.RSVP.hash({
      chirps: this.store.query('user', {me: true}).then((users)=> {
        var currentUser = users.get('firstObject')
        var followers = currentUser.get('followees')
        var chirpies = currentUser.get('chirps')
        followers.forEach((user) => {
          chirpies.pushObjects(user.get('chirps'))
        })
        return chirpies;
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