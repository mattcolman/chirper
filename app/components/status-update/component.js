// app/components/status-update/component.js

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showAlert: function() {
      sweetAlert("Sorry", "This feature is not available yet.", "error");
    }
  }
});