import Ember from 'ember';

export function initialize(applicationInstance) {
let router = applicationInstance.__container__.lookupFactory('router:main');
	
  router.map(function(){
	this.route('gittest');
});

  navbarService: Ember.inject.service('navbar'),
activate(){
	this.get('navbarService').navbarLabels.addObject('gittest');
}

}

export default {
  name: 'addroute',
  initialize
};
