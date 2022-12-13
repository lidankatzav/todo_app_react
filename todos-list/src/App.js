import React, { useState } from "react";
import {Home} from "./pages/Home"
import {Navbar} from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import {SignIn} from "./pages/Sign-In";
import { MultiTodos } from "./pages/Multi-Todos";
import { AuthContext } from "./providers/AuthContext";

function App() {
  const [userDeatils, setUserDeatils] = useState(null);
  
  return (
    <AuthContext.Provider value = {{userDeatils, setUserDeatils}}>
    <Navbar/>
    <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/todo-lists" element={<MultiTodos/>} />
    </Routes>
    </AuthContext.Provider>
  );
};

export default App;


