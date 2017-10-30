const dialog = require('../dialog/dialog.pug');

class HomeController {
  constructor(twitchService, $mdDialog) {
    "ngInject";
    this.text = 'Hola Amigo';
    this._twitchService = twitchService;
    this._$mdDialog = $mdDialog;
    this.results = [];
  };
  
  $onInit = () => {
    this._twitchService.retrieveAllStatus()
      .then((results) => {
        console.log('results', results);
        this.results = results;
      });
  };

  viewDetails = (channel) => {
    console.log('channel', channel);
    this._$mdDialog.show({
      template: dialog,
      parent: angular.element(document.body),
      locals: { channel },
      clickOutsideToClose: true,
      controller: ($scope, channel) => {
        "ngInject";
        $scope.channel = channel;
      }
    });
  };
}

export default HomeController;
