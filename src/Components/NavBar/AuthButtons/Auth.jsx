import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import "./Auth.scss";

function Auth({ userDetails }) {
  return (
    <div className="access--application__styles">
      {userDetails === null ? (
        <Fragment>
          <NavLink to="/login">
            <button className="auth--button__style" type="button">
              Log In
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="auth--button__style" type="button">
              Sign Up
            </button>
          </NavLink>
        </Fragment>
      ) : (
        <div className="userData_style">
          <h3>{userDetails.username}</h3>
        </div>
      )}
    </div>
  );
}

export default Auth;
