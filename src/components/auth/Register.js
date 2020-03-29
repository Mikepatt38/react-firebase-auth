import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

export const Register = () => {
  const auth = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    const { email, password, firstName, lastName } = event.target.elements;
    const userDetails = {
      firstName: firstName.value,
      lastName: lastName.value
    }
    auth.register(email.value, password.value, userDetails);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>If you have an account, <Link to="/login">login here</Link>.</p>
    </div>
  )
}