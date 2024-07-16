// Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/api/v1/signup', {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
      }).then(response => {
        if (response.status === 201) {
          window.alert("Signup successful");
        }
        return response;
      }).catch(error => {
        window.alert("Error: " + error.message);
        throw error; 
      });
      console.log('Signup successful', response.data);
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
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
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit">Signup</button>      
      <button type="button" onClick={toggleForm}>
        Switch to Login
      </button>
    </form>
  );
};

export default Signup;
