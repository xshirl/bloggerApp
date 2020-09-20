import React, { useState } from "react";
import Nav from "./Nav";
import { register } from "../api/apiUsers";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const submitRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await register({
        email: email,
        username: username,
        password: password,
      });
      console.log(response);
      setEmail("");
      setPassword("");
      setUsername("");
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Nav />
      <div className="ui middle aligned center aligned grid">
        <div className="column mt-100">
          <h2 className="ui teal image header">
            <div className="content">Sign Up</div>
          </h2>
          <form className="ui large form" onSubmit={submitRegister}>
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="user circle icon"></i>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="ui fluid large teal submit button"
              >
                Login
              </button>
            </div>

            <div className="ui error message"></div>
          </form>

          <div className="ui message">
            New to us? <a href="/register">Sign Up</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
