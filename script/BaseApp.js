var app = angular.module("myApp", []); 

app.controller('myCtrl', function($scope, $http) {
    $scope.firstName = "Doe";
    $scope.employeeCode = "";
    $scope.name = "";
    $scope.age = "";
    $scope.department = "";
    $scope.designation = "";
    $scope.designation = "";
    
    $http.get("http://localhost:8585/employee").then(function (response) {
        $scope.employee = response.data;
    });
	
	$scope.addEmployee = function () {
        debugger;
        var data = {};
        data.name = $scope.employeeCode;
        data.name = $scope.name;
        data.age = $scope.age;
        data.department = $scope.department;
        data.designation = $scope.designation;
        data.email = $scope.email;

        $http.put('http://localhost:8585/employee/:data', data)
        .then(function (response) {
            debugger;
            if (response.data)
                $scope.msg = "Put Data Method Executed Successfully!";
            });
	};
});