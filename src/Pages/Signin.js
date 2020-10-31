import React, { useState } from "react";
import FooterMain from "../Container/Footer/Footer";
import HeaderMain from "../Container/Header/Header";
import FormMain from "../Container/Form/SignInForm/Form";

const Signin = () => {
  const [password, setPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [error, setError] = useState(null);
  
  return (
    <>
      <HeaderMain>
        <FormMain setError={setError} password={password} setPassword={setPassword} emailAddress={emailAddress} setEmailAddress={setEmailAddress} error={error} />
      </HeaderMain>
      <FooterMain />
    </>
  );
};

export default Signin;
