import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Register } from './components/auth/Register';
import { Login } from './components/auth/Login';

export function UnauthenticatedApp() {
  return (
    <React.Fragment>
      <nav>
        <h1>React Firebase Auth</h1>
      </nav>
      <main>
        <AppRoutes />
      </main>
    </React.Fragment>
  )
}

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<UnAuthAction />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

const UnAuthAction = () => (
  <p>You can <Link to="/login">login</Link> or <Link to="/register">register</Link> here.</p>
);