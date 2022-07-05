import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Todos() {
  const { id } = useParams();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // get from api
    axios.get(`http://localhost:4000/user/${id}`)
      .then((response) => setTodos(response.data))
      .catch((error) => error);
  }, [id, todos]);

  return (
    <>
      <h2>Tasks</h2>
      {
        todos ? todos.map((todo) => (
          <>
            <h4>{ todo.todo }</h4>
            <p>{ todo.todo_id }</p>
            <p>{ todo.status }</p>
          </>
        )) : <h3>No task Found</h3>
      }
    </>

  );
}
