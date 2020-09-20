import React, { useState, useEffect } from "react";
import "./App.css";
import { verifyUser } from "./api/apiUsers";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect = async () => {
    try {
      const response = await verifyUser();
      console.log(response);
      setUser(response.user);
    } catch (error) {
      console.log(error);
    }
  };

  const signout = async () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  let Site;

  if (user) {
    Site = <div className="ui fixed inverted menu"></div>;
  }

  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
    </Router>
  );
}

export default App;
