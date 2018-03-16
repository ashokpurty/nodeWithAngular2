'use strict';

var employeeList = require('../Models/NodeWebApiModel');

exports.list_all_employee = function(req, res){
		console.log('Start employee app');
		res.send(employeeList.getAllEmployee());
		console.log('Got All employee');
};

exports.addEmployee = function(req, res){
		console.log('Start adding employee');
		var data = req.body;
		console.log(data);
		res.json(employeeList.addEmployee(data));
		console.log('Added employee');
};
