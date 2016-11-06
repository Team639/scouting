const angular = require('angular');
require('angular-ui-router');
require('angular-resource');

const homeController = require('./home.controller');
const homeService = require('./home.service');

const homeModule = angular.module('app.home', ['ui.router', 'ngResource'])
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state('home', {
      url: '/home',
      controller: 'HomeController',
      template: require('raw!./home.html')
    });
  }])
  .service('HomeService', homeService)
  .controller('HomeController', homeController)
  .name;

module.exports = homeModule;