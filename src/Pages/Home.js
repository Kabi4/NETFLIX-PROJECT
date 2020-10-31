import React from "react";
import JumbotronmMain from "../Container/Jumbotron/Jumbotron";
import FooterMain from "../Container/Footer/Footer";
import WelcomeMain from "../Container/Welcome/Welcome";
import HeaderMain from "../Container/Header/Header";
import { Optform, Feature } from "../Components";
const Home = () => {
  return (
    <>
      <HeaderMain>
        <Feature>
          <Feature.Title>
            Unlimited files, TV programmes and more.
          </Feature.Title>
          <Feature.Subtitle>
            Watch anywhere. Cancel at any time.
          </Feature.Subtitle>
          <Optform>
            <Optform.Input placeholder="Email address"  type="email"/>
            <Optform.Button>Try it now</Optform.Button>
            <Optform.Break />
            <Optform.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </Optform.Text>
          </Optform>
        </Feature>
      </HeaderMain>
      <JumbotronmMain />
      <WelcomeMain />
      <FooterMain />
    </>
  );
};

export default Home;
