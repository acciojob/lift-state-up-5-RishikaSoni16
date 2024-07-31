import React, { useState } from 'react';
import LoginForm from './LoginForm';

function ParentComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default ParentComponent;
