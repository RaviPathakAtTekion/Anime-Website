import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import "../AccessComponentsStyles.scss";

function SignUpContainer() {
  const navigate = useNavigate();

  const handleUserSignUpDetails = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    if (formJson.signup_password === formJson.signup_confirm_password) {
      window.sessionStorage.setItem(
        "userDetails",
        JSON.stringify({
          username: formJson.signup_firstname,
          password: formJson.signup_password,
        })
      );
      navigate("/");
    } else {
      alert("password and confirm password are different");
    }
  };
  return (
    <Fragment>
      <h2 className="login--title__style">SignUp</h2>
      <div className="fix_margin_top"></div>
      <form className="form__style" onSubmit={handleUserSignUpDetails}>
        <h4 className="form__title">Enter Your Details To Register</h4>
        <label className="login__form__input">
          <span className="details_label">Enter FirstName</span>
          <input type="text" name="signup_firstname" autoComplete="off"></input>
        </label>
        <label className="login__form__input">
        <span className="details_label">Enter LastName</span>
          <input type="text" name="signup_lastname" autoComplete="off"></input>
        </label>
        <label className="login__form__input">
        <span className="details_label">Enter Password</span>
          <input
            type="password"
            name="signup_password"
            autoComplete="off"
          ></input>
        </label>
        <label className="login__form__input">
        <span className="details_label">Confirm Password</span>
          <input
            type="password"
            name="signup_confirm_password"
            autoComplete="off"
          ></input>
        </label>
        <button className="login--submit--button" type="submit">
          Submit
          <span className="forward--arrow">{"--->"}</span>
        </button>
      </form>
    </Fragment>
  );
}

export default SignUpContainer;
