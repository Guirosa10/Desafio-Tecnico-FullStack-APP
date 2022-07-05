import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorState, setErrorState] = useState('');
  const [id, setId] = useState(0);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  const submitForm = (e) => {
    setErrorState('');
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios.post('http://localhost:4000/login', body)
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        setId(response.data.id);
        setAuth(true);
      })
      .catch((error) => setErrorState(JSON.stringify(error.response.data)));
  };

  useEffect(() => {
    if (auth) {
      navigate(`/todos/user/${id}`);
    }
  }, [auth]);

  return (
    <form onSubmit={submitForm} className="registration-form">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Insert Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Insert Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
      >
        Login
      </button>
      {
        errorState && (
          <p>{ errorState }</p>
        )
      }
    </form>
  );
}
