import Ember from 'ember';

export function initialize(applicationInstance) {
let container = applicationInstance.container;
let router = container.lookupFactory('router:main');
	//let router = applicationInstance.lookupFactory('router:main');

  router.map(function(){
	this.route('gittest');
});
}

export default {
  name: 'addroute',
  initialize
};
