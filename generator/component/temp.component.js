import template from './<%= name %>.pug';
import controller from './<%= name %>.controller';
import './<%= name %>.scss';

let <%= name %>Component = {
  bindings: {},
  template,
  controller
};

export default <%= name %>Component;
