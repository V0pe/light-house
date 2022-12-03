import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login';
import LandingPage from './pages/LandingPage';
import CreatePage from './pages/CreatePage';
import CreatePage2 from './pages/CreatePage2';
import Dashboard from './pages/dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="login" element={<LoginPage />} />
        <Route exact path="create" element={<CreatePage />} />
        <Route exact path="create/create2" element={<CreatePage2 />} />
        <Route exact path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
