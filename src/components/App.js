import React from 'react';
import { useUser } from '../context/user-context';
import { UnauthenticatedApp } from '../unauth-routes';
import { AuthenticatedApp } from '../auth-routes';
import './global.scss';

function App() {
  const user = useUser();
  console.log('The user is: ', user);
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
