import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SingIn";
import ForgotPassword from "./components/forgotPassword";
import Home from "./components/Home";
import Room from "./components/Room/room";
function App() {
  const isloggedIn = window.localStorage.getItem("loggedIn");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Room" element={<Room />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
