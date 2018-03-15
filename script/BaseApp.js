var app = angular.module("myApp", []); 

app.controller('myCtrl', function($scope, $http) {
    $http.get("http://localhost:8585/employee").then(function (response) {
		debugger;
        $scope.employee = response.data;
    });
});