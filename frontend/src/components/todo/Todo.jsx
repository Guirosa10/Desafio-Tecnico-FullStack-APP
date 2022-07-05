import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Todo.css';

export default function Todo({ todolist }) {
  const handleDelete = () => {
    axios.delete(`http://localhost:4000/todo/${todolist.todo_id}`);
  };

  return (
    <div className="todo">
      <h4>{ todolist.todo }</h4>
      <p>{ todolist.todo_id }</p>
      <p>{ todolist.status }</p>
      <button
        type="button"
        onClick={handleDelete}
      >
        Delete
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
