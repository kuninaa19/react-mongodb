import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../styles/TodoCreate.scss';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

function TodoCreate() {
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });

    setValue('');

    nextId.current += 1;
  };

  return (
    <div className="createBox">
      <div className="register" onClick={onSubmit}>
        <MdAdd />
      </div>
      <input
        type="text"
        className="input"
        placeholder="할 일 추가"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default React.memo(TodoCreate);
