import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../AccessComponentsStyles.scss";

function LoginContainer() {
  const navigate = useNavigate();
  const handleUserLoginDetails = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    window.sessionStorage.setItem(
      "userDetails",
      JSON.stringify({
        username: formJson.login_username,
        password: formJson.login_password,
      })
    );
    navigate("/");
  };

  return (
    <Fragment>
      <h2 className="login--title__style">Login</h2>
      <div className="fix_margin_top"></div>
      <form className="form__style" onSubmit={handleUserLoginDetails}>
        <h4 className="form__title">Enter Your Details To Login</h4>
        <label className="login__form__input">
          Username
          <input type="text" name="login_username" autoComplete="off"></input>
        </label>
        <label className="login__form__input">
          Password
          <input
            type="password"
            name="login_password"
            autoComplete="off"
          ></input>
        </label>
        <Link className="forgot__passeord__style" to="/forgotPassword">
          Forgot Password ?
        </Link>
        <button className="login--submit--button" type="submit">
          Login
        </button>
      </form>
    </Fragment>
  );
}

export default LoginContainer;
