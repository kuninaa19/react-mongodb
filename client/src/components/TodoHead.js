import React from 'react';
import '../styles/TodoHead.scss';
import { useTodoState } from '../TodoContext';

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);
  console.log(undoneTasks);

  const today = new Date();
  const dateString = today.toLocaleDateString('KO-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  return (
    <div className="head">
      <h1>오늘 할 일</h1>
      <div className="day">
        {dateString} {dayName}
      </div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </div>
  );
}

export default TodoHead;
