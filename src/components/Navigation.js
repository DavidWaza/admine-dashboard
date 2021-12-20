import React from "react";
import "./Navigation.css";


const Navigation = ({ onRouteChange , isSignedIn}) => {
  if (isSignedIn) {
    return (
      <nav className="Nav">
        <p
          onClick={() => onRouteChange("signout")}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <div>
        <nav className="Nav">
          <p
            onClick={() => onRouteChange("signin")}
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("signup")}
          >
            Register
          </p>
        </nav>
      </div>
    );
  }
};
export default Navigation;
