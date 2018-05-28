import DS from 'ember-data';

export default DS.Model.extend({
   bookname: DS.attr('string'),
   author: DS.attr('string'),
   description: DS.attr('string'),
   reviews: DS.attr('number'),
   categoryId: DS.attr('number'),
   book: DS.belongsTo('category',{ async: true })
});
