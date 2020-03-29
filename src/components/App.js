import React from 'react';
import { useAuth } from '../context/auth-context';
import { UnauthenticatedApp } from '../unauth-routes';
import { AuthenticatedApp } from '../auth-routes';
import './app.scss';

function App() {
  const auth = useAuth();
  console.log('The user is: ', auth.user);
  return (
    <div className="App">
      {auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
