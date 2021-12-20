import React from "react";

const signIn = ({ onInputChange, onRouteChange }) => {
  return (
    <>
      <div>
        <h1>Sign In</h1>
      </div>
      <div className="container">
        <div className="containment">
          <div className="forms">
            <form className="grids">
              <div className="form-group">
                <label for="name">Email:</label>
                <br />
                <input
                  onChange={onInputChange}
                  type="text"
                  placeholder="input Email"
                  className="form-control"
                  id="InputEmail"
                ></input>
              </div>
              <br />
              <div className="form-group">
                <label for="name">Password:</label>
                <br />
                <input
                  onChange={onInputChange}
                  type="password"
                  placeholder="input password"
                  className="form-control"
                  id="inputPassword"
                ></input>
              </div>
              <pre></pre>
              <button
                type="submit"
                className="btn-primary"
                id="enter"
                // onClick={() => onRouteChange('')}
              >
                Sign In
              </button>
              <p className="center">Or</p>
              <button
                type="submit"
                className="btn-secondary btn-primary"
                id="enter"
                onClick={() => onRouteChange("signup")}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default signIn;
