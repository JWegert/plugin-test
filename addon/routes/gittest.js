import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

navbarService: Ember.inject.service('navbar'),

activate(){
	this.get('navbarService').navbarLabels.addObject('gittest');
},
	
});
