'use strict';

var fs = require('fs');
var resultSet = [];



exports.getAllEmployee = function()
{
	fs.exists('./Database/Database.js', function(exists) {
		fs.readFile('./Database/Database.js', function(err,data )
		{
			if(err)
			{
				console.log(err);
			}
			else
			{
				console.log("Read file content");
				resultSet = JSON.parse(data);
			}
		});
		console.log("Task complete");
	});
return resultSet;
};

exports.getEmployee = function(data)
{
	exports.getAllEmployee();
	if(resultSet)
	{
		for(var i=0;i < resultSet.length;i++)
		{
			json_data = resultSet.getJSONObject(i);
			employeeCode=json_data.getInt("employeeCode");
			if(data == employeeCode)
			{
				return json_data;
			}
        }
	}
};

exports.addEmployee = function(data)
{
	exports.getAllEmployee();
	console.log('From Add Employee Api!');
	if(resultSet)
	{
		console.log('Inside if Add Employee Api!');
		resultSet.push(data);
		fs.writeFile('./Database/Database.js', JSON.stringify(resultSet), function (err) {
			if (err) 
			{
				console.log('Error logged!');
			}
		console.log('Wrtie file sucessfully!');
		});
	}
	console.log('Outside if Add Employee Api!');
};

exports.EditEmployee = function(data)
{
	
};

exports.deleteEmployee = function(data)
{
	
};
