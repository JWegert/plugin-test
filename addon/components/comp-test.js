import Ember from 'ember';
import layout from '../templates/gittest';

export default Ember.Component.extend({
  pluginTest: Ember.inject.service('plugintest'),
  message: 'test',
  actions: {
  	pressMe: function () {
  		var testText = this.get('pluginTest').thisistest();
  		this.set('message', testText);
  		console.log(this.get('pluginTest').isAuthenticated);
  	}
  }
});
