import React, { Component } from 'react'

export class TodoForm extends Component {
     constructor(){
         super();
         this.state = {
             todo: ''
         };
     }
    
     handleChanges = e => {
         this.setState({ [e.target.name]: e.target.value})
         //  alternate syntax: this.setState({
        //      todo: e.target.value 
        //  })
     }

     submitTodo = e => {
         e.preventDefault();
         this.setState({ todo: ''});
         this.props.addTodo(e, this.state.todo)
     }

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input
                    type="text"
                    value={this.state.todo}
                    name="todo"
                    onChange={this.handleChanges}
                
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm
