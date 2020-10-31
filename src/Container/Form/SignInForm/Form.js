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
}) {
  const [inProgress, setIntProgress] = useState(false);
  const notValid = password.length < 6 || emailAddress === "" || inProgress;
  const history = useHistory();
  const handleSignin = (event) => {
    setError(null);
    event.preventDefault();
    setIntProgress(true);
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then((res) => {
        history.push(Routes.Browse);
        setIntProgress(false);
      })
      .catch((err) => {
        setEmailAddress("");
        setPassword("");
        setError(err.message);
        setIntProgress(false);
      });
  };
  return (
    <Form>
      <Form.Title>Sign In</Form.Title>
      {error && <Form.Error>{error}</Form.Error>}
      <Form.Base onSubmit={handleSignin}>
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
          Sign In
        </Form.Submit>
        <Form.Text>
          New to Netflix?{" "}
          <Form.Link to={Routes.SIGN_UP}>Sign Up Now!</Form.Link>{" "}
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </Form.TextSmall>
      </Form.Base>
    </Form>
  );
}
