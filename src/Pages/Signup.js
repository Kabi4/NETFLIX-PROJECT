import React, { useState } from 'react'
import FooterMain from '../Container/Footer/Footer';
import FormMain from '../Container/Form/SignupForm/Form';
import HeaderMain from '../Container/Header/Header';

const Signup = () => {
    const [password, setPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [firstName,setFirstName] = useState("");
  const [error, setError] = useState(null);
    return (
        <>
      <HeaderMain>
        <FormMain  firstName={firstName} setFirstName={setFirstName}  setError={setError} password={password} setPassword={setPassword} emailAddress={emailAddress} setEmailAddress={setEmailAddress} error={error} />
      </HeaderMain>
      <FooterMain />
    </>
    )
}

export default Signup
