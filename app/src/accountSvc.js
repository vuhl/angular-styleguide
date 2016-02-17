class AccountSvc {
  constructor($http) {
    this.$http = $http;
  }

  myGetFunction(myApiRoute) {
    return this.$http.get(myApiRoute);
  }
}

angular
  .module('app')
  .service('accountSvc', AccountSvc);
