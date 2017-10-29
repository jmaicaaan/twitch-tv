import template from './<%= name %>.pug';
import controller from './<%= name %>.controller';
import './<%= name %>.styl';

let <%= name %>Component = {
  bindings: {},
  template,
  controller
};

export default <%= name %>Component;
