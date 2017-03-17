import Ember from 'ember';

export default Ember.Route.extend({
	testService: Ember.inject.service("landscape-reload"),

model: function() {
	return this.testService.updateObject();
}
});

