import { Optform, Welcome } from "../../Components/index";
import React from "react";
import FAQ from "./../../Data/QuestionAnswer.json";
import FlipMove from "react-flip-move";
export default function WelcomeMain() {
  return (
    <Welcome>
      <Welcome.Title>Frequently Asked Questions</Welcome.Title>
      {FAQ.map((ele) => {
        return (
          <Welcome.Item key={ele.id}>
            <Welcome.Header>{ele.header}</Welcome.Header>
            <FlipMove>
              <Welcome.Body>{ele.body}</Welcome.Body>
            </FlipMove>
          </Welcome.Item>
        );
      })}
      <Optform>
        <Optform.Input placeholder="Email address" type="email" />
        <Optform.Button>Try it now</Optform.Button>
        <Optform.Break />
        <Optform.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </Optform.Text>
      </Optform>
    </Welcome>
  );
}
