import Ember from 'ember';

export function initialize(applicationInstance) {

	let router = applicationInstance.lookup('router:main');

  router.map(function(){
	this.route('gittest');
});
}

export default {
  name: 'addroute',
  initialize
};
