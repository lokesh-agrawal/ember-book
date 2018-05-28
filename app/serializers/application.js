import DS from 'ember-data';
import Ember from 'ember';
import Inflector from 'ember-inflector';
import { singularize, pluralize } from 'ember-inflector';

const { String:capitalize } = Ember;
export default DS.JSONAPISerializer.extend({
payloadKeyFromModelName(modelName) {
    return singularize(modelName);
  }
});
