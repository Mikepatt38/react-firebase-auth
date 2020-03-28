import React from 'react';
import { useUser } from './context/user-context';
import { useAuth } from './context/auth-context';

export function AuthenticatedApp() {
  const user = useUser();
  const auth = useAuth();

  return (
    <div>
      {`The user id is: ${user.uid}`}
      <button onClick={() => auth.logout()}>
        Logout
      </button>
    </div>
  )
}