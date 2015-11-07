import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    accessDenied () {
      this.transitionTo('index');
    },
    login () {
      this.get('torii').open('twitter').then(({ code }) => {
        let user = JSON.parse(decodeURIComponent(code));
        this.get('session').set('currentUser', user);
      }, error => console.error(error));
    }
  }
});
