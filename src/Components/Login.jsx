// Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/api/v1/login', {
        email: email,
        password: password
      }, {
        withCredentials: true
      }).then(response => {
        if (response.status === 201) {
          window.alert("Login successful");
        }
        return response;
      }).catch(error => {
        window.alert("Error: " + error.message);
        throw error; // Re-throw the error to be caught by the outer catch block
      });
      console.log('Login successful', response.data);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={toggleForm}>
        Switch to Signup
      </button>
    </form>
  );
};

export default Login;
