import React from 'react';
import classNames from 'classnames';
import { MdDone, MdDelete } from 'react-icons/md';
import '../styles/TodoItem.scss';
import { useTodoDispatch } from '../TodoContext';

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  return (
    <div className="itemContainer">
      <div className={classNames('checkCircle', { done })} onClick={onToggle}>
        {done && <MdDone />}
      </div>
      <div className={classNames('text', { done })}>{text}</div>
      <div className="remove" onClick={onRemove}>
        <MdDelete />
      </div>
    </div>
  );
}

export default React.memo(TodoItem);
