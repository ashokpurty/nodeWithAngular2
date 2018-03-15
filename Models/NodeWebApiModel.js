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
