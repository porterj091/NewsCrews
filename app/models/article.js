import DS from 'ember-data';

// model for holding specific article data
export default DS.Model.extend({
  author: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  urlToImage: DS.attr('string'),
  publishedAt: DS.attr('date')
});
