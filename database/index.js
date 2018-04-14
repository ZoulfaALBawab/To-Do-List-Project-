const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


var taskSchema = mongoose.Schema({
   date :  Number, 
   day :   String, 
   task1 : String,
   task2 : String,
   task3 : String
 });



var save = function (tsk) 
{
 	var task = new Task ({date:tsk.data,day:tsk.day,task1:tsk.task1,task2:tsk.task2,task3:tsk.task3});
 	task.save();

}

var selectAll= function(callback){
	task.find({},function(err,tasks){
		if (err){
			callback(err,null);
		} else {
			callback(null,err);
		}
	})
}
module.exports = selectAll;
module.exports = save;

