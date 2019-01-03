/**
 * Registry class.
 * @class Registry
 */
class Registry {
  /**
   * Constructor.
   * @method constructor
   * @returns {undefined}
   */
  constructor() {
    this.components = {};
  }

  /**
   * register component.
   * @method register
   * @param {Object} component component
   * @param {string} name name of component
   * @returns {undefined}
   */
  register = (component, name) => {
    this.components[name] = component;
  };

  /**
   * get component.
   * @method get
   * @param {string} name name of component
   * @returns {?Object} return found component
   */
  get = name => {
    if (this.components[name]) {
      return this.components[name];
    }
    return null;
  };
}

export const registry = new Registry();
export default registry;
