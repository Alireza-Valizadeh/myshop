import { createObjWithDefaultValues } from '../utils/general';

export class Product {
  constructor(options) {
    const defaults = {
      id: null,
      size: null,
      title: null,
      price: null,
      count: null,
      imgUrl: null,
      description: null,
    };
    createObjWithDefaultValues(this, defaults, options);
  }
}
