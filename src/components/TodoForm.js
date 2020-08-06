import React from 'react';
import styled from 'styled-components';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: ""
        };
    }   

    handleChange = e => {
        this.setState({todo: e.target.value});
    };

    //Not quite clear where props are pulling from here. I know I'm passing in addItem, but is the fact that the passed in thing called props just assumed?
    onSubmit = e => {
       
        e.preventDefault();
        this.props.addItem(this.state.todo);
        this.setState({todo: ""});
    }
    render() {
        return (
            <div>
                <StyledForm onSubmit = {this.onSubmit}>
                    <StyledInput 
                    type="text"
                    name="todo"
                    value={this.state.todo}
                    onChange={this.handleChange}
                    >
                    </StyledInput>
                    <StyledButton>Submit</StyledButton>
                </StyledForm>
                <StyledButton onClick={this.props.clearComplete}>Clear Completed</StyledButton>
            </div>
        )

    }
    
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledInput = styled.input`
    border: 0;
    font-size: 24px;
    margin-bottom: 20px;
    border-radius: 10px;
    color: #11aad1;
`;

const StyledButton = styled.button`
  background-color: white;
  color: #11aad1;
  border: 1px solid #11aad1;
  font-size: 24px;
  border-radius: 10px;
  margin: 5px;
  

`;

export default TodoForm;