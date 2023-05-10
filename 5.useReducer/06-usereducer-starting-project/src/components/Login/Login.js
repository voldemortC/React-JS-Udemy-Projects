import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../auth-context";
import Input from "../UI/Input/Input";
// import { useReducer } from 'react/cjs/react.production.min';

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const authctx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: undefined,
  });
  const [passState, dispatchPass] = useReducer(passReducer, {
    value: "",
    isValid: undefined,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passIsValid } = passState;

  useEffect(() => {
    console.log("EFFECT RUNNING");
    let identifier = setTimeout(() => {
      setFormIsValid(emailState.isValid && passState.isValid);
    }, 400);
    return () => {
      console.log("EFFECT CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passIsValid]);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  // setFormIsValid(
  //   enteredEmail.includes('@') && enteredPassword.trim().length > 6
  // );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: "USER_INPUT",
      val: event.target.value,
    });
    // setEnteredEmail(event.target.value);

    // setFormIsValid(
    //   emailState.value.includes('@') && passState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({
      type: "USER_INPUT",
      val: event.target.value,
    });

    // setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   emailState.value.includes('@') && passState.isValid
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: "INPUT_BLUR",
    });
    // setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    dispatchPass({
      type: "INPUT_BLUR",
    });
    // setPasswordIsValid(enteredPassword.trim().length > 6);/
  };

  const emailRef = useRef();
  const passRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authctx.onLogin(emailState.value, passState.value);
      console.log(!formIsValid, "formvalid");
    } else if (!emailIsValid) {
      emailRef.current.toggle();
    } else {
      passRef.current.toggle();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref = {emailRef}
          id="email"
          type="email"
          value={emailState.val}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          state = {emailState.isValid}
          label = "Email"
        />
        <Input
          ref = {passRef}
          id="password"
          type="password"
          value={passState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          state = {passState.isValid}
          label = "Password"
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
