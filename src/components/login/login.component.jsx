import React from "react";
import { connect } from "react-redux";

import { signInWithGoogle } from "../../firebase/firebase";

import { Button } from "@material-ui/core";

import { setCurrentUser } from "../../redux/user/user.actions";

import "./login.style.css";

const Login = ({ setCurrentUser }) => {
  const signIn = () => {
    signInWithGoogle()
      .then((result) => {
        const { displayName, email, photoURL } = result.user;

        setCurrentUser({ displayName, email, photoURL });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facbook"
        />

        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="Facbook"
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
