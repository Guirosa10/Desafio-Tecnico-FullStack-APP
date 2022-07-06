import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Todo.css';

export default function Todo({ todolist, setTodos, userId }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [todoText, setTodoText] = useState('');
  const [statusText, setStatusText] = useState('Pendente');

  const handleDelete = async () => {
    await axios.delete(`http://localhost:4000/todo/${todolist.todo_id}`);
    const results = await axios.get(`http://localhost:4000/user/${userId}`);
    setTodos(results.data);
    setToggleEdit(false);
  };

  const handleEdit = async () => {
    const body = {
      todo: todoText,
      status: statusText,
      todoId: todolist.todo_id,
    };

    await axios.put('http://localhost:4000/todo/', body);
    const results = await axios.get(`http://localhost:4000/user/${userId}`);
    setTodos(results.data);
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
              value={!todoText ? todolist.todo : todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
            <select onChange={(e) => setStatusText(e.target.value)}>
              <option value="" selected disabled>Choose here</option>
              <option value="Pendente">Pendente</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Pronto">Pronto</option>
            </select>
            <button
              type="button"
              onClick={handleEdit}
            >
              Edit
            </button>
          </>
        )
      }
      {
        !toggleEdit && (
          <button
            type="button"
            onClick={toggleEdition}
          >
            Edit Task
          </button>
        )
      }

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
  setTodos: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};
