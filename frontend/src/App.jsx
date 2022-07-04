import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Todos from './pages/Todos/Todos';

function App() {
  return (
    <div className="App">
      <h1> TodoList Fulllstack</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/todos/:id" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
