import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Register from './pages/Register';
import Login from './pages/Login';
import Categories from './pages/Categories';
import Topics from './pages/Topics';
import Messages from './pages/Messages';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/topics/:catId" element={<Topics />} />
        <Route path="/messages/:topicId" element={<Messages />} />
      </Routes>
    </Router>
  );
}

export default App;
