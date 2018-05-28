import Controller from '@ember/controller';

export default Controller.extend({
	filter: '',
	categories: [],
 bookcategories: [],
   
 
    filteredBooks: Ember.computed('filter', function() {
        const filterTerm = this.get('filter');
        var model = this.get('model.books');


        var filtered = model.filter( function(book) {
            return book.get('bookname').indexOf(filterTerm) !== -1;
        });
       
        return filtered;

    }),

    


 actions: {
    changeCheck: (function(model) {  
            let x = model.srcElement.value;
            let val = false
            for (var i = this.bookcategories.length - 1; i >= 0; i--) {
                if(this.bookcategories[i] === x)
                {
                    this.bookcategories.removeObject(model.srcElement.value);
                    val = true;
                }
            }
            if(val == false){
                 this.bookcategories.pushObject(model.srcElement.value);
            }
            console.log(this.bookcategories);
             var model = this.get('model.books');


        var filtered = model.filter( function(book) {
            return book.get('bookname').indexOf("Mond") !== -1;
        });
        console.log(filtered);
        return filtered;
        })
    }
    
});

