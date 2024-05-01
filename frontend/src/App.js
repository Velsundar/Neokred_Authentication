import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Screens/Login/Login';
import Profile from './Screens/Profile/Profile';
import SignupForm from './Screens/Login/SignupForm';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Profile />} />
      <Route path="/register" element={<SignupForm/>}/>
      {/* Add more routes for other pages if needed */}
    </Routes>
  </Router>
  );
};

export default App;
