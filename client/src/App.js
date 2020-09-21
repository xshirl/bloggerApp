import React, { useState, useEffect } from "react";
import "./App.css";
import { verifyUser } from "./api/apiUsers";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";
import Post from "./components/Post";
import EditPost from "./components/EditPost";

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleUser = async () => {
      try {
        const response = await verifyUser();
        console.log(response);
        setUser(response.user);
      } catch (error) {
        console.log(error);
      }
    };
    handleUser();
  }, []);

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
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/newPost" component={NewPost} />
      <Route exact path="/posts/:id" component={Post} />
      <Route exact path="/posts/:id/edit" component={EditPost} />
    </Router>
  );
}

export default App;
