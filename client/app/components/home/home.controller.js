class HomeController {
  constructor(twitchService) {
    "ngInject";
    this.text = 'Hola Amigo';
    this._twitchService = twitchService;
  };
  
  $onInit = () => {
    console.log('this._twitchService', this._twitchService);
  };
}

export default HomeController;
