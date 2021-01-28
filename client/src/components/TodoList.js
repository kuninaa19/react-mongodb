import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.scss';
import { useTodoState } from '../TodoContext';

function TodoList() {
  const todos = useTodoState();

  return (
    <div className="container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </div>
  );
}

export default TodoList;
