import Ember from 'ember';
import layout from '../templates/components/comp-test'


export default Ember.Component.extend({
	layout,
  pluginTest: Ember.inject.service("landscape-reload"),
  message: 'test',
  actions: {
  	pressMe: function () {
  		var testText = this.get('pluginTest').updateObject();
  		this.set('message', testText);
  		//console.log(this.get('pluginTest').isAuthenticated);
  	}
  }
});




