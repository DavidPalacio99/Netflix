import React, { useRef } from "react";
import "./SignIn.css";
import { auth } from "../../firebase";

const SignIn = () => {
  const emailRef = useRef(null);
  const PasswordRef = useRef(null);

  const register = () => {
    console.log("clicked");
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        PasswordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        PasswordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="text" placeholder="Password" ref={PasswordRef} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="SigUpScreen__gray">New to Netflix ? </span>
          <span
            className="SigUpScreen__link"
            onClick={() => {
              register();
            }}
          >
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
