import { createObjWithDefaultValues } from '../utils/general';

export class signUpData {
  constructor(options) {
    const defaults = {
      name: null,
      family: null,
      email: null,
      password: null,
    };
    createObjWithDefaultValues(this, defaults, options);
  }
}

export class signInData {
  constructor(options) {
    const defaults = {
      email: null,
      password: null,
    };
    createObjWithDefaultValues(this, defaults, options);
  }
}
