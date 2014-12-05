gitHubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

var searchResource = $resource('https://api.github.com/search/users');

$scope.searchHistory = []

  $scope.doSearch = function() {
    if($scope.searchTerm !== ""){
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm,
      access_token: "8a57f89da099e97a3273104ea0c833c428833dc6"
    });
    }
  };

  $scope.addSearch = function() {
    $scope.searchHistory.push($scope.searchTerm);
  }

  $scope.displayLast = function(searchResults) {
    return searchResults[searchResults.length - 1]
  }

  $scope.showUser = function(username) {
    var userResource = $resource('https://api.github.com/users/' + username + '/repos');
    $scope.userRepoResult = userResource.query({
    access_token: "5d6ffa56fba974adfd2dc6b86157d542c67256c0"
    })
  };

});
