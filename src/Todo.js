import React from 'react';

function Todo (props) {
  return (
    <form onSubmit={props.addTodo}>
      <input type="text" placeholder="Enter Task 🤓"></input>
      <input type="submit" value="Add 😅"/>
    </form>
  )
}

export default Todo;