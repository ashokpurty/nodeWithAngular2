'use strict';

var employeeList = require('../Models/NodeWebApiModel');

exports.list_all_employee = function(req, res){
		console.log('Start employee app');
		res.send(employeeList.getAllEmployee());
		console.log('End');
};