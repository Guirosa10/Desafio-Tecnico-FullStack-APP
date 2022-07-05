import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Todo from '../../components/todo/Todo';

export default function Todos() {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [statusText, setStatusText] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:4000/user/${id}`)
      .then((response) => setTodos(response.data))
      .catch((error) => error);
  }, [id, todos]);

  const handleSubmit = () => {
    const body = {
      id,
      todo: todoText,
      status: statusText,
    };

    axios.post(`http://localhost:4000/user/${id}`, body)
      .then((response) => response)
      .catch((error) => error);
  };

  return (
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
        onClick={handleSubmit}
      >
        Enter Task
      </button>
      <h2>Tasks</h2>
      {
        todos ? todos.map((todo) => (
          <Todo todolist={todo} />
        )) : <h3>No task Found</h3>
      }
    </>

  );
}
