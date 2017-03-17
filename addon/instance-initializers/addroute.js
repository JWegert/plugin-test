import Ember from 'ember';

export function initialize() {

	//let router = applicationInstance.lookupFactory('router:main');
	let router = Ember.getOwner(this).lookup('router:main');

  router.map(function(){
	this.route('gittest');
});
}

export default {
  name: 'addroute',
  initialize
};
