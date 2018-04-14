import React, { Component } from 'react';
import './App.css';


class Tasks extends Component {
	constructor(){
		super();
		this.state={
			tasks :[]
		}
	}
//make a request for the back-end ,, and fill the tasks array ,, So we gana use a life cycle method => 
	componentDidMount(){
		fetch('/api/tasks')
		.then(res => res.json());
		.then(tasks => this.setState({tasks}, () => console.log('Tasks fetched ..' , tasks )));
	}
	//should be fetched in the console .. 
	// it should be {tasks : tasks} ,, but now we use in the es6 style .. 

// bcs. we put the proxy at the package.json ,, so no need to insert the all link !! 
  render() {
    return (
      <div>
         <h2>Tasks</h2>
         <ul>
         {this.state.tasks.map(task => 
         	<li key = {task.id}> {task.date} {task.day} {task.task1} {task.task2} {task.task3}</li>
         	)}
         </ul>
      </div>
    );
  }
}

export default Tasks;
