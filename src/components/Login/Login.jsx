// src/components/Login.jsx

import React from 'react';
import './Login.css'; // Updated CSS file name

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
