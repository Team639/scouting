module.exports = ['$scope', 'HomeService', function($scope, HomeService){
  $scope.title = 'testing';

  $scope.userList = [];
  HomeService.users.get({}, {}, (res) => {
    $scope.userList = res.userList;
  });
}];