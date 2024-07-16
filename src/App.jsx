// App.js
import React, { useState } from 'react';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './styles.css';
const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
    </div>
  );
};

export default App;
