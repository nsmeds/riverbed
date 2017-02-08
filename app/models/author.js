import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    bio: DS.attr(),
    posts: DS.attr()
});
