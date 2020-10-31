import React, { useState } from "react";
import { Form } from "../../../Components/index";
import * as Routes from "../../../Routes/Routes";
import firebaseApp from "../../../lib/firebase";
import { useHistory } from "react-router-dom";

export default function FormMain({
  error,
  setError,
  emailAddress,
  setEmailAddress,
  password,
  setPassword,
  firstName,
  setFirstName
}) {
  const [inProgress, setIntProgress] = useState(false);
  const notValid = firstName==="" || password.length < 6 || emailAddress === "" || inProgress ;
  const history = useHistory();
  const handleSignup = (event) => {
    setError(null);
    event.preventDefault();
    setIntProgress(true);
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((res) => {
        return res.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random()*5)+1,
        })
      })
      .then(()=>{
        history.push(Routes.Browse);
        setIntProgress(false);
      })
      .catch((err) => {
        setEmailAddress("");
        setFirstName("");
        setPassword("");
        setError(err.message);
        setIntProgress(false);
      });
  };
  return (
    <Form>
      <Form.Title>Sign Up</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}
      <Form.Base onSubmit={handleSignup}>
      <Form.Input
          type="text"
          placeholder="First Name"
          autoComplete="on"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        
        <Form.Input
          type="email"
          placeholder="Email Address"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <Form.Input
          type="Password"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Submit type="submit" disabled={notValid}>
          Sign Up
        </Form.Submit>
        <Form.Text>
          Already have a Netflix?{" "}
          <Form.Link to={Routes.SIGN_IN}>Sign In!</Form.Link>{" "}
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </Form.TextSmall>
      </Form.Base>
    </Form>
  );
}
