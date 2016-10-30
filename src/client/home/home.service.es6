module.exports = ['$resource', function($resource) {
  return {
    users: $resource('/api/user')
  }
}];