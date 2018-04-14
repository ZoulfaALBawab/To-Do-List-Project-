const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let taskSchema = mongoose.Schema({
   date :  Number, 
   day :   String, 
   task1 : String,
   task2 : String,
   task3 : String
 });

let Task = mongoose.model('Task', taskSchema);

let save = (data, callback) => 
{
  // This function should save a repo or repos to
  // the MongoDB

 	var task = new Task (data);
 	task.save(function(err, dataRes)
 		//either err or dataRers ,, that is why we used the null .. 
 		//.save ,, which is build in function ,, make the insert of the value .. 
 	{
 		if (err)
 		{
 			callback(err,null);
 		}
 		callback(null, dataRes);
 	});

}

module.exports.save = save;

