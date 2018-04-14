const express = require('express');
const app = express();

// we need to add the libraries .. 
let bodyParser = require('body-parser');
// the body of the request that the client send to the server ,, So we need to parse it  
// do we have to call the body or the div !! 

let db = require ('../database/index.js');
//bcs. we need to connect it with our database ,, to call the save function  .. 
//.. to see the server and database 

let app = express();


app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());


// To Post new values 
app.post('/api/tasks' , (req,res){
		db.save(req.body , function(err,data){
			if (err){
				console.error(err);
			}
			console.log(data);
			res.send(data);
		})
})

//To call value we already have 
app.get ('/api/tasks',(req,res) => {
	const tasks = [
	{date :'14/4', day :'Sun',task1 :'code',task2:'read',task3:'watchVideo'}
	];

	res.json(tasks);
});
//OR ::: 

// app.get ('/api/tasks' , (req,res){
// 	Task.find(function(err,data){
// 		if (err){
// 			console.log(err);
// 		}
// 		res.send(data);
// 	});
// });

//server port 
const port = 3000 ; 

app.listen(port , ()=> console.log(`Server started on port ${port}`) );


