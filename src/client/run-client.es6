const angular = require('angular');
require('angular-ui-router');

const homeModule = require('./home');

require('./client.css');

angular
  .module('app', [homeModule, 'ui.router'])
  .run(['$rootScope', '$state', ($rootScope, $state) => {
    if (!$state.current.name) {
      $state.go('home');
    }
  }]);