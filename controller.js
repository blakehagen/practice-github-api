var app = angular.module('github-api');

app.controller('GitHubController', function($scope, githubService) {

	$scope.getUserData = function() {
		githubService.getUser($scope.searchText).then(function(response) {
			$scope.user = response.data;
		})
	}


});