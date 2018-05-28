
import Controller from '@ember/controller'
 
export default Controller.extend({
  vehicle: null,
  id: 0,
  actions: {
    selectVehicle(vehicle) {
      console.log(vehicle);
      this.set('vehicle', vehicle);
    },
    createBook: function() {
       const filterTerm = this.get('vehicle');
      var bookname = this.get('bookname');
      var author = this.get('author');
      var description = this.get('description');
      var reviews = this.get('reviews');
      var model = this.get('model.categories');
      var filtered = model.filter(function(category) {
            return category.name.indexOf(filterTerm) !== -1;
        });
      console.log(filtered.firstObject.id);
      let book = this.get('store').createRecord('book', {
          bookname: bookname,
          author: author,
          description: description,
          reviews: reviews,
          categoryId: filtered.firstObject.id
        });
      
      book.save();
     
     
     
    
     }
   }

});