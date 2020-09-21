import React, { useState } from "react";
import Nav from "./Nav";
import { Redirect } from "react-router-dom";
import { login } from "../api/apiUsers";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        email: email,
        password: password,
      });
      console.log(response);
      setEmail("");
      setPassword("");
      setLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  let Site;
  console.log(loggedIn);
  if (!loggedIn) {
    Site = (
      <div>
        <Nav />
        <div className="ui middle aligned center aligned grid">
          <div className="column mt-100">
            <h2 className="ui teal image header">
              <div className="content">Log-in to your account</div>
            </h2>
            <form className="ui large form" onSubmit={submitLogin}>
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
      </div>
    );
  } else {
    Site = <Redirect to="/posts" />;
  }
  return <React.Fragment>{Site}</React.Fragment>;
}
