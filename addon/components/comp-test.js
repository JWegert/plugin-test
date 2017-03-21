import Ember from 'ember';
import layout from '../templates/components/comp-test';

export default Ember.Component.extend({
  hostService: Ember.inject.service('plugintest'),
  message: 'test',
  actions: {
  	pressMe: function () {
  		var testText = this.get('plugintest').thisistest();
  		this.set('message', testText);
  		console.log(this.get('plugintest').isAuthenticated);
  	}
  }
});
