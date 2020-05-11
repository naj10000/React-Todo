// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
    return (
        <div className="shopping-list">
            {props.todos.map(todo => ( 
                <Todo key={todo.id} 
                        todo={todo} 
                        toggleTodo={props.toggleTodo}/> //sending the props over
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}
