import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="ui fixed inverted menu">
      <div className="ui container">
        <div class="header item">
          <i class="code icon"></i> Blogger{" "}
        </div>
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
