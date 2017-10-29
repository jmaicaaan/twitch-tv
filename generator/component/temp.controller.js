class <%= upCaseName %>Controller {
  constructor($state, $stateParams) {
    "ngInject";
    this.name = '<%= name %>';
  }

  $onInit = () => {};
}

export default <%= upCaseName %>Controller;
