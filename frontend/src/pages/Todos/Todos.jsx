import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Todo from '../../components/todo/Todo';

export default function Todos() {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [statusText, setStatusText] = useState('Pendente');
  const [filterOptions, setFilterOptions] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get(`http://localhost:4000/user/${id}`);
        setTodos(results.data);
        setData(results.data);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchData();
  }, []);

  const filter = () => {
    if (filterOptions === 'pending') {
      const results = todos.filter((todo) => todo.status === 'Pendente');
      setData(results);
    }
    if (filterOptions === 'ongoing') {
      const results = todos.filter((todo) => todo.status === 'Em andamento');
      setData(results);
    }
    if (filterOptions === 'done') {
      const results = todos.filter((todo) => todo.status === 'Pronto');
      setData(results);
    }
  };

  useEffect(() => {
    setData(todos);
  }, [todos]);

  const handleSubmit = async () => {
    const body = {
      id,
      todo: todoText,
      status: statusText,
    };

    await axios.post(`http://localhost:4000/user/${id}`, body)
      .then((response) => response)
      .catch((error) => error);
    const results = await axios.get(`http://localhost:4000/user/${id}`);
    setTodos(results.data);
    setData(results.data);
    setTodoText('');
  };

  return (
    <>
      <input
        type="text"
        placeholder="Insert Todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <select onChange={(e) => setStatusText(e.target.value)}>
        <option value="" selected disabled hidden>Choose here</option>
        <option value="Pendente">Pendente</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Pronto">Pronto</option>
      </select>
      <button
        type="button"
        onClick={handleSubmit}
      >
        Enter Task
      </button>
      <h2>Tasks</h2>
      <select onChange={(e) => setFilterOptions(e.target.value)}>
        <option value="" selected disabled>Choose here</option>
        <option value="pending">Pending</option>
        <option value="ongoing">Ongoing</option>
        <option value="done">Done</option>
      </select>
      <button
        type="button"
        onClick={filter}
      >
        Filtrar
      </button>
      {
        data ? data.map((todo) => (
          <Todo userId={+id} todos={todos} todolist={todo} setTodos={setTodos} setData={setData} />
        )) : <h3>No task Found</h3>
      }
    </>
  );
}
