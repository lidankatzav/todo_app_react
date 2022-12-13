import React, { useState } from "react";
import { AuthContext } from "./providers/AuthContext";
import { MultiTodos } from "./pages/Multi-Todos";
import { SignIn } from "./pages/Sign-In";
import {Navbar} from "./components/Navbar";
import {Outlet} from "react-router-dom";

function App() {
  const [userDeatils, setUserDeatils] = useState(null);
  
  return (
    <>
    <Navbar/>
    <Outlet />
    </>
  );
  //   userDeatils ? (
  //   <AuthContext.Provider value = {userDeatils}>
  //       <MultiTodos/>
  //     </AuthContext.Provider>
  //   ): (
  //   <AuthContext.Provider value = {setUserDeatils}>
  //     <SignIn/>
  //   </AuthContext.Provider>
  // ));
}

export default App;
