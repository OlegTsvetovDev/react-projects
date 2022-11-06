import React from 'react';


const Todo = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <div>
      <span style={{border: todo.complete ? '#CCC' : '#000'}}>
        {todo.name} {todo.complete ? 'completed' : ''}
      </span>
      <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default Todo
