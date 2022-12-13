import React, { useRef, useState } from "react";
import { AuthContext } from "./providers/AuthContext";
import { MultiTodos } from "./pages/Multi-Todos";
import { SignIn } from "./pages/Sign-In";

function App() {
  const [userDeatils, setUserDeatils] = useState(null);
  
  return (
    userDeatils ? (
    <AuthContext.Provider value = {userDeatils}>
        <MultiTodos/>
      </AuthContext.Provider>
    ): (
    <AuthContext.Provider value = {setUserDeatils}>
      <SignIn/>
    </AuthContext.Provider>
  ));
}

export default App;
