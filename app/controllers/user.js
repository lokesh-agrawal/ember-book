import Controller from '@ember/controller';


export default Controller.extend({
	validation:{
		firstname: {
			presence:true,
		}
	},
	actions: {
    	signUp: function() {
      var firstname = this.get('firstname');
      var lastname = this.get('lastname');
      var email = this.get('email');
      var contact = this.get('contact');
      var password = this.get('password')
      var password_confirm = this.get('password_confirm')
      var user = this.store.createRecord('user', {
        firstname: firstname,
        lastname: lastname,
        email: email,
        contact: contact,
        password: password
      });
      
      user.save();
     }
   }
});
