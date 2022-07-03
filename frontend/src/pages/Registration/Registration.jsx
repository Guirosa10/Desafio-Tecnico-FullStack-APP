import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';

export default function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorState, setErrorState] = useState('');

  const submitForm = (e) => {
    setErrorState('');
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios.post('http://localhost:4000/registration', body)
      .catch((error) => setErrorState(JSON.stringify(error.response.data)));
  };

  return (
    <form onSubmit={submitForm} className="registration-form">
      <h1>Register</h1>
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
        Registrar
      </button>
      {
        errorState && (
          <p>{ errorState }</p>
        )
      }
    </form>
  );
}
