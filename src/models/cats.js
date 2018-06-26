'use strict';

import storage from '../lib/storage/data-store.js';
import uuid from 'uuid/v1';

class Cat{

  constructor(config) {
    this.id = uuid();
    this.name = config && config.name || '';
    this.age = config && config.age || '';
  }

  save() {
    return storage.save(this);
  }

  static fetchAll() {
    return storage.getAll();
  }

  static findOne(id) {
    return storage.get(id);
  }

  static updateOne(criteria) {
    return storage.update(this);
  }

  static deleteOne(id) {
    return storage.delete(id);
  }

}

export default Cat;