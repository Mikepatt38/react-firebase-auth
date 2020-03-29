import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

export const Login = () => {
  const auth = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    auth.login(email.value, password.value);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>If you do not have an account, <Link to="/register">sign up here</Link>.</p>
    </div>
  )
}