import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Register from './pages/Register';
import Login from './pages/Login';
import Categories from './pages/Categories';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
