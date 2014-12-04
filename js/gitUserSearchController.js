gitHubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

var searchResource = $resource('https://api.github.com/search/users');

  $scope.doSearch = function() {
    if($scope.searchTerm !== ""){
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm,
      access_token: "8a57f89da099e97a3273104ea0c833c428833dc6"
    });
    }
  };

});
