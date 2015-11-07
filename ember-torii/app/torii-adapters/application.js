import Ember from 'ember';

export default Ember.Object.extend({
  fetch () {
    return Ember.$.getJSON('http://localhost:3000/me?callback=?').then(user => {
      return {
        currentUser: user
      }
    });
  }
});
