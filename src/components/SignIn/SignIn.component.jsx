import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/actions/user/user.action";
import CustomButton from "../Custom-Button/Custom-Button.component";
import FormInput from "../Form-Input/Form-Input.component";

import "./SignIn.styles.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentail, setUserCredentail] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentail;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserCredentail({ ...userCredentail, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have account</h2>
      <span>Sign In with your email and password</span>

      <form>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit" onClick={handleSubmit}>
            Sign In
          </CustomButton>

          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
