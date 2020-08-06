
import React from 'react';
import Todo from './Todo.js';

function TodoList(props) {

        
    return (
        <div 
        className="todo-list"
        >        
            {props.todoItems.map(item => (
                <Todo key={item.id} todo={item} markComplete={props.markComplete}/>
            ))}
        </div>
    )
}

export default TodoList;