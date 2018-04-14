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
            lists :[] ///!!!!!
        }
        
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
    console.log(`${term} `);
     //ex. : the LIKE at facebook ,, i dont need to open another page to make it .. 

     //what should i pass in the ajax !! 
    $.ajax({
      type: 'POST',
      url: '/tasks',
      data: {date: term, day: '', task1: '',task2: '',task3: ''},
      success: function (res) 
      {
          console.log('success');
      }
    });
  }
//i need to build my buttons here ::  
  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <Lists lists={this.state.lists}/>
      <Search onSearch={this.search.bind(this)}/> 
    </div>);
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
export default App;
