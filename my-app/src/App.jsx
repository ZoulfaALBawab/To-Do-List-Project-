import React from 'react';
import ReactDOM from 'react-dom';
//no need for the logo 
import './App.css';
import $ from 'jquery';
import Tasks from './components/tasks/tasks';

class App extends React.Component {
      constructure (props){
        supre(props);
        this.state=
        {
            lists :[];
        }
      }

      //!!!!!!!!!!!!
   search (term) 
  {
    console.log(`${term} was searched`);
     //ex. : the LIKE at facebook ,, i dont need to open another page to make it .. 

     //what should i pass in the ajax !! 
    $.ajax({
      type: 'POST',
      url: '/repos',
      data: {name: term, url: '', private: false},
      success: function (res) 
      {
          console.log('success');
      }
    });
  }

//i need to build my buttons here ::  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://images.yourstory.com/2016/10/To-do-list.jpg?auto=compress" alt="to do lists">
          <h1 className="App-title">My To Do</h1>
          <h3>Add New Day List !</h3>
        <br>
        <input value = {this.state.term}  >
        <input value = {this.state.term}  >
        <input value = {this.state.term}  >
        <input value = {this.state.term}  >
        <input value = {this.state.term}  >


        </header>
        <Tasks />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;
