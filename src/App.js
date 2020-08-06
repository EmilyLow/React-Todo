import React from 'react';
import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm.js'
import "./styles.css";
import styled from 'styled-components';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItems: tasks
    };

    //Start of stretch attempt
    // this.state = {};
    // if(!localStorage.getItem('todo')){
      
    //   this.populateStorage();
    // }
    // else {
    //   this.setPage();
    // }
  }

  populateStorage = () => {
    //Add default items to storage
    //And then set up page
    this.setPage();
  }

  setPage = () => {
    //Set initial state based off storage
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

  clearComplete = () => {
    
   
    let filtered = this.state.todoItems.filter(todo => {
    
      return !todo.completed;
    });

    this.setState({todoItems: filtered});
  
  }
  

  render() {
    return (

      <PageStyle className="App">
        <div className = "header">
        <StyledHeader>Todo List</StyledHeader>
        </div>
        <AppBox>
            <TodoList todoItems = {this.state.todoItems} markComplete={this.markComplete}/>
            <TodoForm addItem={this.addTodo} clearComplete={this.clearComplete}/>
        </AppBox>
        
      </PageStyle>
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

const StyledHeader = styled.h2`
  color: #11aad1;
  font-size: 48px;

`;

const PageStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

`;


const AppBox = styled.div`
  background-color: #5fd7f5;
  color: white;
  font-size: 24px;
  width: 30%;
  min-width: 500px;
  padding: 30px;
  border-radius: 30px;


`;

export default App;
