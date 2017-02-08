import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    author: DS.attr(),
    issue: DS.attr(),
    content: DS.attr(),
    bio: DS.attr()
});
