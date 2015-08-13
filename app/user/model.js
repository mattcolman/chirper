// app/user/model.js

import Ember from 'ember';
import DS from 'ember-data';

var User = DS.Model.extend({
  username: DS.attr('string'),
  numberOfChirps: Ember.computed('chirps', function() {
    return this.get('chirps').get('length');
  }),
  numberOfFollowing: Ember.computed('followees', function() {
    return this.get('followees').get('length');
  }),
  numberOfFollowers: Ember.computed('followers', function() {
    return this.get('followers').get('length');
  }),
  aboutMe: DS.attr('string'),
  joinedAt: DS.attr('date'),
  chirps: DS.hasMany('chirp', { async: true }),
  followees: DS.hasMany('user', { async: true, inverse: 'followers' }),
  followers: DS.hasMany('user', { async: true, inverse: 'followees' })
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      username: 't4t5', // Put your username here
      numberOfChirps: 3,
      numberOfFollowing: 5,
      numberOfFollowers: 5,
      aboutMe: 'I like making stuff.',
      joinedAt: new Date('2015-06-08T09:30:26'),
      chirps: [1, 2, 3],
      followees: [1],
      followers: [1]
    }
  ]
});

export default User;