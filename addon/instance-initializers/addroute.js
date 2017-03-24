import Ember from 'ember';

export function initialize(applicationInstance) {
//let app = applicationInstance.__container__.lookupFactory('route:application');
let router = applicationInstance.__container__.lookupFactory('router:main');
	
// 	app.activate(function(){
// 	this.get('navbarService').navbarLabels.addObject('gittest');
// });

  router.map(function(){
	this.route('gittest');
});



	

}

export default {
  name: 'addroute',
  initialize
};
