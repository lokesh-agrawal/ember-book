import Route from '@ember/routing/route';

export default Route.extend({
	 model() {
    return Ember.RSVP.hash({
      categories: this.get('store').findAll('category'),
      books: this.get('store').findAll('book')
     })
 

    }

});