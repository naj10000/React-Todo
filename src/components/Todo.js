import React from 'react'



export default function Todo(props) {
    
    return (
        <div 
        
        className={`todo${props.todo.completed ? ' completed': ''}`} //switches the class with ternary
        onClick={()=> props.toggleTodo(props.todo.id)}
        >
          <p>{props.todo.task}</p> 
          <button  style={btnStyle}>X</button> 
        </div>
    )
}

const btnStyle ={
    background: '#ff0000',
    color: "#fff",
    border: "none",
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer'
}
