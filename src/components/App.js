import React from 'react';
import { useUser } from '../context/user-context';
import { RegisterForm } from '../unauth-routes';
import { UserBase } from '../auth-routes';
import './global.scss';

function App() {
  const user = useUser();
  console.log('The user is: ', user);
  return (
    <div className="App">
      {user ? <UserBase /> : <RegisterForm />}
    </div>
  );
}

export default App;
