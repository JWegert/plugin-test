import Ember from 'ember';

export function initialize(applicationInstance) {
let router = applicationInstance.__container__.lookupFactory('router:main');
let app = applicationInstance.lookup('route:application');

navbarService: Ember.inject.service('navbar'),

//add button tonavigation menu
app.get('navbarService').navbarLabels.pushObject('gittest');

//add route to application's router.js
  router.map(function(){
	this.route('gittest');
});


}

export default {
  name: 'addroute',
  initialize
};
