import Ember from 'ember';

export function initialize(applicationInstance) {
let router = applicationInstance.__container__.lookupFactory('router:main');
	
  router.map(function(){
	this.route('gittest');
});
}

export default {
  name: 'addroute',
  initialize
};
