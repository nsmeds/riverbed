import Ember from 'ember';

export default Ember.Route.extend({
    // renderTemplate() {
    //   this.render('authors');
    // },
    model() {
      return this.get('store').findAll('post');
    },

    
});
