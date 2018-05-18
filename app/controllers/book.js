import Ember from 'ember';
 
export default Ember.Controller.extend({
  actions: {
    createBook: function() {
      
      var bookname = this.get('bookname');
      var author = this.get('author');
      var description = this.get('description');
      var reviews = this.get('reviews');

      
      var book = this.store.createRecord('book', {
        bookname: bookname,
        author: author,
        description: description,
        reviews: reviews
      });
      
      book.save();
     }
   }
});