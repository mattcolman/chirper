// app/application/adapter.js

import config from '../config/environment';
import DS from 'ember-data';

export default DS.RESTAdapter.reopen({
  host: config.apiURL
});