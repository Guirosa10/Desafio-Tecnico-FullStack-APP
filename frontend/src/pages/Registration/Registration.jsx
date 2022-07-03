import React, { useState } from 'react';
import axios from 'axios';

export default function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios.post('http://localhost:4000/registration', body).then((response) => console.log(response));
  };

  return (
    <form onSubmit={submitForm}>
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
    </form>
  );
}
