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
    // setupController(controller, models) {
    //     controller.setProperties(models);
    //     controller.set('posts', models.posts);
    //     controller.set('issues', models.issues);
    //     controller.set('authors', models.authors);
    // },
    actions: {
      createPost(model) {
        let post = this.store.createRecord('post', {
          title: model.title,
          text: model.text,
          author: model.author,
          issue: model.issue
        });
        post.save();
      }
    }
});
