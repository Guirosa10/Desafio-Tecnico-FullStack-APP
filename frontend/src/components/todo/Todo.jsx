import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

export default function Todo({ todolist }) {
  return (
    <div className="todo">
      <h4>{ todolist.todo }</h4>
      <p>{ todolist.todo_id }</p>
      <p>{ todolist.status }</p>
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
