import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPages from './SignupPages/SignupPages';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPages />} />

      </Routes>
    </Router>
  );
}

export default App;
