import React from 'react';
import '../styles/TodoTemplate.scss';

function TodoTemplate({ children }) {
  return <div className={'template'}>{children}</div>;
}

export default TodoTemplate;
