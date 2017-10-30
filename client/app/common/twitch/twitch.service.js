class TwitchService {
  constructor($http, $q) {
    "ngInject";
    this._$http = $http;
    this._$q = $q;
    this.baseURL = 'https://wind-bow.glitch.me/twitch-api/';
  };

  getChannels = (name) => {
    let channels = ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'habathcx', 'RobotCaleb', 'noobs2ninjas'];
    if (name) {
      return channels.filter((channel) => channel.toLowerCase().indexOf(name) > - 1);
    }
    return channels;
  };

  retrieveChannelStatus = (channel) => {
    if (!channel) {
      return;
    }
    return this._$http.get(this.baseURL + 'channels/' + channel)
      .then((resp) => resp.data)
      .then((channel) => {
        return this.checkForChannelStreams(channel.name)
          .then((stream) => {
            channel.stream = stream;
            return channel;
          });
      })
      .then((data) => data);
  };

  checkForChannelStreams = (channel) => {
    if (!channel) {
      return;
    }
    return this._$http.get(this.baseURL + 'streams/' + channel)
      .then((resp) => resp.data);
  };

  retrieveAllStatus = () => {
    let channels = this.getChannels();
    let promises = [];
    let defer = this._$q.defer();

    angular.forEach(channels, (channel) => {
      let promise = this.retrieveChannelStatus(channel);
      promises.push(promise);
    });

    this._$q.all(promises)
      .then((response) => defer.resolve(response));
    return defer.promise;
  };
}

export default TwitchService;