import Ember from 'ember';

export function initialize(applicationInstance) {
let router = applicationInstance.__container__.lookupFactory('router:main');
let app = applicationInstance.lookup('route:application');

navbarService: Ember.inject.service('navbar'),

//add label for button to navigation menu
app.get('navbarService').navbarLabels.pushObject('addon');

//add route to application's router.js
  router.map(function(){
	this.route('addon');
});


}

export default {
  name: 'addroute',
  initialize
};
