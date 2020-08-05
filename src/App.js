import React from 'react';
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'
import "./styles.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItems: tasks
    };
  }

  addTodo = todo => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoItems: [...this.state.todoItems, newTodo]
    });
  };

  markComplete = (itemId) => {
    // When do you use () vs {} inside map?
    //Also I don't understand the last bit of the return here quite. How it setting the completed of the correct item? 
    this.setState({
      todoItems: this.state.todoItems.map(item => {
        if (itemId === item.id) {
          return {...item, completed: !item.completed};
        }
        return item;

      })
    })
  };
  

  render() {
    return (
      <div className="App">
        <div className = "header">
        <h2>Todo List:</h2>
        </div>
        
        <TodoList todoItems = {this.state.todoItems} markComplete={this.markComplete}/>
        <TodoForm addItem={this.addTodo}/>
      </div>
    );
  }
}

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export default App;
