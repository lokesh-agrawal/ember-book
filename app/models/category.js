import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	categories: DS.hasMany('book',{async: true})

});
