import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Components/NotFound.jsx';
import Home from './Pages/Home.jsx';
import Starred from './Pages/Starred.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/starred" element={<Starred />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
