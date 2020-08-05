import React from 'react';

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
        console.log("submitted");
        e.preventDefault();
        this.props.addItem(this.state.todo);
        this.setState({todo: ""});
    }
    render() {
        return (
            <div>
                <p>To Do Form</p>
                <form onSubmit = {this.onSubmit}>
                    <input 
                    type="text"
                    name="todo"
                    value={this.state.todo}
                    onChange={this.handleChange}
                    >
                    </input>
                    <button>Submit</button>
                </form>
                <button>Clear Completed</button>
            </div>
        )

    }
    
}

export default TodoForm;