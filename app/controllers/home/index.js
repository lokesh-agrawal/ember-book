import Controller from '@ember/controller';

export default Controller.extend({
	filter: '',

    filteredBooks: Ember.computed('filter', function() {
        const filterTerm = this.get('filter');
        var model = this.get('model.books');

        var filtered = model.filter( function(book) {
            return book.get('bookname').indexOf(filterTerm) !== -1;
        });

        return filtered;
    })
});
