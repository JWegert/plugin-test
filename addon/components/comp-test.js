import Ember from 'ember';


export default Ember.Component.extend({
  pluginTest: Ember.inject.service("landscape-reload"),
  message: 'test',
  actions: {
  	pressMe: function () {
  		var testText = this.get('pluginTest').updateObject;
  		this.set('message', testText);
  		//console.log(this.get('pluginTest').isAuthenticated);
  	}
  }
});

// export default Ember.Component.extend({
//   pluginTest: Ember.inject.service('plugintest'),
//   message: 'test',
//   actions: {
//   	pressMe: function () {
//   		var testText = this.get('pluginTest').thisistest();
//   		this.set('message', testText);
//   		console.log(this.get('pluginTest').isAuthenticated);
//   	}
//   }
// });



