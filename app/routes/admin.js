import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
    model() {
        return RSVP.hash({
            posts: this.get('store').findAll('post'),
            issues: this.get('store').findAll('issue'),
            authors: this.get('store').findAll('author')
        });
    },
    actions: {
        selectAuthor(value) {
            this.set('selection', value)
        },
        selectIssue(value) {
            this.set('selection', value)
        }
        
    }
});
