import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import $ from 'jquery';
import Tasks from './components/tasks/tasks';

class App extends React.Component {
      constructure (props){
        supre(props);
        this.state=
        {
            lists :[]; ///!!!!!
        }
        this.onChange = this.onChange.bind(this);
        this.search = this.search.bind(this);
      }

      //!!!!!!!!!!!!

      onChange (e) // making event ,, what the custumer write .. 
  {
    this.setState({
      term: e.target.value // we make it as it is .. for each empty value the customer will insert it .. 
    });
  }
   search (term) 
  {
    console.log(`${term} was searched`);
     //ex. : the LIKE at facebook ,, i dont need to open another page to make it .. 

     //what should i pass in the ajax !! 
    // $.ajax({
    //   type: 'POST',
    //   url: '/repos',
    //   data: {name: term, url: '', private: false},
    //   success: function (res) 
    //   {
    //       console.log('success');
    //   }
    // });
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
        <form action="/action_page.php">
  Date :<br>
  <input type="text" name="date" value={}>
  <br>
  Day :<br>
  <input type="text" name="day" value={}>
    <br>

  Task1 :<br>
  <input type="text" name="task1" value={}>
  <br>

  Task2 :<br>
  <input type="text" name="task2" value={}>
  <br>

  Task3 :<br>
  <input type="text" name="task3" value={}>
  <br><br>
  <input type="submit" value="Submit" >
</form> 

        </header>
        <Tasks />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;
