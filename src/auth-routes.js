import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './views/Dashboard';
import { useAuth } from './context/auth-context';

export function AuthenticatedApp() {
  const auth = useAuth();
  return (
    <React.Fragment>
      <nav>
        <h1>React Firebase Auth</h1>
        <button onClick={() => auth.logout()}>
          Logout
      </button>
      </nav>
      <main>
        <AppRoutes />
      </main>
    </React.Fragment>
  )
}

const AppRoutes = () => (
  <Routes>
    <Route exact path="/dashboard" element={<Dashboard />} />
  </Routes>
);