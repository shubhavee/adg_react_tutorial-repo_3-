import {Component} from 'react';
import React from 'react';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header'

class App extends Component{
  state = {
    todos: [
      {
        id:1,
        title: 'Take out trash',
        completed: false
      },
      {
        id:2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id:3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  //Toggle complete
  markComplete=(id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo;
    })});
  }
  //delete todo
  delTodo=(id)=>{
    this.setState({todos: [...this.state.todos.filter(todo=>todo.id!==id)]});
  }

  render(){
    console.log(this.state.todos)
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
