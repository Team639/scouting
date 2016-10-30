const homeController = require('./home.controller');

const homeModule = angular.module('app.home', ['ui.router'])
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state('home', {
      url: '/home',
      controller: 'HomeController',
      template: require('raw!./home.html')
    });
  }])
  .controller('HomeController', homeController).name;

module.exports = homeModule