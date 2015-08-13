// app/chirp/model.js

import DS from 'ember-data';

var Chirp = DS.Model.extend({
  text: DS.attr('string'),
  user: DS.belongsTo('user', { async: true }),
  createdAt: DS.attr('date')
});

Chirp.reopenClass({
  FIXTURES: [
    {
      id: 1,
      text: 'Hello world!',
      user: 1,
      createdAt: new Date('2015-06-08T09:30:26')
    },
    {
      id: 2,
      text: 'Hello again!',
      user: 1,
      createdAt: new Date('2015-06-08T09:30:27')
    },
    {
      id: 3,
      text: 'Hello one more time!',
      user: 1,
      createdAt: new Date('2015-06-08T09:30:28')
    }
  ]
});

export default Chirp;