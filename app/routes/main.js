import Ember from 'ember';

let authors = [{
    id: 'percival-footlight',
    name: 'Percival Footlight',
    bio: 'Percival Footlight is a mighty penman from the great mountain town of Kaiser, CA.'
}, {
    id: 'sandy-bottoms',
    name: 'Sandy Bottoms',
    bio: 'Sandy Bottoms is a mighty fine gal, also known as the modern poetry queen of St. Augustine, FL.'
}, {
    id: 'erskine-moleskine',
    name: 'Erskine Moleskine',
    bio: 'Erskine Moleskine was chosen Best New Talent, 2017, by the editors of the Oakhurst Poetry Zine.'
}];

export default Ember.Route.extend({
    model() {
        return authors;
    }
});
