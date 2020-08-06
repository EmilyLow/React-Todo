
import React from 'react';
import styled from 'styled-components';

function Todo(props) {

   
    
    //className doesn't quite match example
    //How would I do this bit of styling with styled components?
    // return (
    //     <div 
    //     onClick = {() => props.markComplete(props.todo.id)}
    //     className={props.todo.completed ? "completed" : "" }
    //     >
    //         <p>{props.todo.task}</p>
    //     </div>
    // )

    //Attempt with Styled components
    return (
        <StyledTodo 
        onClick = {() => props.markComplete(props.todo.id)}
        completed={props.todo.completed}
        >
            <p>{props.todo.task}</p>
        </StyledTodo>
    )
}

export default Todo;

const StyledTodo = styled.div`
    
    text-decoration: ${props => props.completed ? "line-through" : "none"};
`;