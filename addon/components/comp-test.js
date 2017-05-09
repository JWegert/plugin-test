import Ember from 'ember';
import layout from '../templates/components/comp-test'


export default Ember.Component.extend({
	layout,
  message: '',
  actions: {
  	pressMe: function () {
  		var testText = 'Hello World!';
  		this.set('message', testText);
  		}
  }
});




