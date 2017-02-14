import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    author: DS.attr({}),
    issue: DS.attr({defaultValue: function() {
        return {};
    }}),
    text: DS.attr('string'),
    bio: DS.attr('string')
});
