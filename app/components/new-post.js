import Ember from 'ember';

export default Ember.Component.extend({   
    // model() {
    //     return RSVP.hash({
    //         posts: this.get('store').findAll('post'),
    //         issues: this.get('store').findAll('issue'),
    //         authors: this.get('store').findAll('author')
    //     });
    // }, 
    actions: {
        selectAuthor(value, event) {
            this.set('selection', value);
        },
        selectIssue(value, event) {
            this.set('selection', value);
        },
        createPost(model) {
            console.log('model argument', model);
            console.log('model.title', model.title);
            console.log('model.author', model.author);
            console.log('model.issue', model.issue);
            console.log('model.text', model.text);
            this.sendAction('createPost', model);

            //clear input fields
            this.set('newPost.title', null);
            this.set('newPost.text', null);
        }
        
    }
});
