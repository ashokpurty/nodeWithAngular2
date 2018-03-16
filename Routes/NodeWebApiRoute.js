'use strict';

module.exports= function(app){
	var employeeList = require('../Controllers/NodeWebApiController');
	
	// .. employeeList
	app.route('/employee').get(employeeList.list_all_employee);
	
	app.route('/employee/:data').put(employeeList.addEmployee);
	
}