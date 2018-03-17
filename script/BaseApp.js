var app = angular.module("myApp", [
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.selection',
    'ui.grid.cellNav',
    'ui.grid.expandable',
    'ui.grid.edit',
    'ui.grid.rowEdit',
    'ui.grid.saveState',
    'ui.grid.resizeColumns',
    'ui.grid.pinning',
    'ui.grid.moveColumns',
    'ui.grid.exporter',
    'ui.grid.infiniteScroll',
    'ui.grid.importer',
    'ui.grid.grouping'
]); 

app.controller('myCtrl',['$scope', '$http', '$log', '$timeout', 'uiGridConstants', '$q', '$interval', function($scope, $http, $log, $timeout, uiGridConstants, $q, $interval) {
    $scope.employeeCode = "";
    $scope.name = "";
    $scope.age = "";
    $scope.department = "";
    $scope.designation = "";
    $scope.designation = "";
    debugger;

    var resultData = [];
    $scope.employeeGridData = {
        data: resultData,
        columnDefs: [
            {
                name: 'employeeCode',
                displayName: 'Employee Code',
                enableSorting: true,
                enableRowSelection: true,
                cellTemplate: 'editData.html',
                width: '*',
                cellTemplate: '<div class="ui-grid-cell-contents" >' +
                    '<button value="Edit" ng-if="!row.inlineEdit.isEditModeOn" ng-click="row.inlineEdit.enterEditMode($event)">Delete</button>' +
                    '<button value="Edit" ng-if="!row.inlineEdit.isEditModeOn" ng-click="row.inlineEdit.enterEditMode($event)">Edit</button>' +
                    '<button value="Edit" ng-if="row.inlineEdit.isEditModeOn" ng-click="row.inlineEdit.saveEdit($event)">Update</button>' +
                    '<button value="Edit" ng-if="row.inlineEdit.isEditModeOn" ng-click="row.inlineEdit.cancelEdit($event)">Cancel</button>' +
                    '</div>',
                    enableCellEdit: false,
                    enableFiltering:false,
                    showSortMenu : false,
                    enableColumnMenu: false,
            },
            {
                name: 'name',
                displayName: 'Employee Name',
                enableSorting: true,
                width: '*',
                enableCellEdit: true,
                cellTemplate: '<div class="ui-grid-cell-contents"><div ng-class="{\'viewr-dirty\' : row.inlineEdit.entity[col.field].isValueChanged }">{{row.entity[col.field]}}</div></div>'
            },
            {
                name: 'age',
                displayName: 'Age',
                enableSorting: false,
                width: '*',
                enableCellEdit: true,
                cellTemplate: '<div class="ui-grid-cell-contents"><div ng-class="{\'viewr-dirty\' : row.inlineEdit.entity[col.field].isValueChanged }">{{row.entity[col.field]}}</div></div>'
            },
            {
                name: 'department',
                displayName: 'Department',
                enableSorting: false,
                width: '*',
                enableCellEdit: true,
                cellTemplate: '<div class="ui-grid-cell-contents"><div ng-class="{\'viewr-dirty\' : row.inlineEdit.entity[col.field].isValueChanged }">{{row.entity[col.field]}}</div></div>'
            },
            {
                name: 'designation',
                displayName: 'Designation',
                enableSorting: false,
                width: '*',
                enableCellEdit: true,
                cellTemplate: '<div class="ui-grid-cell-contents"><div ng-class="{\'viewr-dirty\' : row.inlineEdit.entity[col.field].isValueChanged }">{{row.entity[col.field]}}</div></div>'
            }

      ]
    }

    $http.get("http://localhost:8585/employee").then(function (response) {
        debugger;
        $scope.employeeGridData = resultData = response.data  ;
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
    
    $scope.editEmployee = function(){
        debugger;
        alert('Hello');
    };
}]);