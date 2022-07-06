import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Todo.css';

export default function Todo({ todolist }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [todoText, setTodoText] = useState('');
  const [statusText, setStatusText] = useState('');

  const handleDelete = () => {
    axios.delete(`http://localhost:4000/todo/${todolist.todo_id}`);
  };

  const handleEdit = () => {
    const body = {
      todo: todoText,
      status: statusText,
      todoId: todolist.todo_id,
    };
    axios.put('http://localhost:4000/todo/', body);
    setToggleEdit(false);
  };

  const toggleEdition = () => {
    setToggleEdit(!toggleEdit);
  };

  return (
    <div className="todo">
      {
        !toggleEdit && (
          <>
            <h4>{ todolist.todo }</h4>
            <p>{ todolist.status }</p>
          </>
        )
      }
      {
        toggleEdit && (
          <>
            <input
              type="text"
              placeholder="Insert Todo"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
            <input
              type="text"
              placeholder="Insert Status"
              value={statusText}
              onChange={(e) => setStatusText(e.target.value)}
            />
            <button
              type="button"
              onClick={handleEdit}
            >
              Edit
            </button>
          </>
        )
      }

      <button
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        type="button"
        onClick={toggleEdition}
      >
        Edit Task
      </button>

    </div>
  );
}

Todo.propTypes = {
  todolist: PropTypes.shape({
    todo: PropTypes.string,
    todo_id: PropTypes.number,
    status: PropTypes.string,
  }).isRequired,
};
