import React, { useState } from "react";
import LoginForm from "./LoginForm";

function ParentComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default ParentComponent;
