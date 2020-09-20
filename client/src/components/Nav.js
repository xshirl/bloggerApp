import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="ui fixed inverted menu">
      <div className="ui container">
        <div className="header item"></div>
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/newPost" className="item">
          New Post
        </Link>
        <Link to="/login" className="item">
          Login
        </Link>
      </div>
    </div>
  );
}
