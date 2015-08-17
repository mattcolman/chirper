import config from '../../config/environment';
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['follow-container'],

  isFollowing: Ember.computed('profile.followers', 'session.currentUser', function() {
    return this.get('profile.followers').isAny('id', this.get('session.currentUser.id'));
  }),

  actions: {

    follow: function() {
      Ember.$.ajax({
        type: 'POST',
        url: config.apiURL + '/follow',
        dataType: 'json',
        data: {
          profileId: this.get('profile.id')
        }
      })
      .done(() => {
        // Add yourself to the profile's list of followers
        this.get('profile.followers').pushObject(this.get('session.currentUser'));
      })
      .fail(() => {
        swal("Oops", "Couldn't follow user!", "error");
      });
    },

    unfollow: function() {
      Ember.$.ajax({
        type: 'POST',
        url: config.apiURL + '/unfollow',
        dataType: 'json',
        data: {
          profileId: this.get('profile.id')
        }
      })
      .done(() => {
        // Remove yourself to the profile's list of followers
        var myFollow = this.get('profile.followers').findBy('id', this.get('session.currentUser.id'));
        this.get('profile.followers').removeObject(myFollow);
      })
      .fail(() => {
        swal("Oops", "Couldn't unfollow user!", "error");
      });
    }
  }

});