
import React from 'react';

function Todo(props) {

    console.log(props.todo)
    
    //className doesn't quite match example
    return (
        <div 
        onClick = {() => props.markComplete(props.todo.id)}
        className={props.todo.completed ? "completed" : "" }
        >
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;