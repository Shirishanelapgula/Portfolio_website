import { useContext, useRef } from "react";

import emailjs from "@emailjs/browser";
import themeContext from "../../themeContext/themeContext";
import {
  ContactSectionContainer,
  FormContainer,
  FormText,
  Title,
  TitleSubNote,
  Form,
  InputLabel,
  InputField,
  MessageTextArea,
  SubmitButton,
} from "./styledComponents";

function ContactSection() {
  const form = useRef();

  const { isDarkMode } = useContext(themeContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8fy5fyh",
        "template_203rtv9",
        form.current,
        "eLDQ1C3dqCVN4cI0S"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <ContactSectionContainer id="contact">
      <FormContainer isDarkMode={isDarkMode}>
        <FormText>
          <Title>Get In Touch</Title>
          <TitleSubNote>
            Do you have a project and/or want to have a chat?
            <br />
            Feel free to send me a message, I will definitely reply.
          </TitleSubNote>
        </FormText>
        <Form
          ref={form}
          type="submit"
          onSubmit={sendEmail}
          isDarkMode={isDarkMode}
        >
          <InputLabel htmlFor="name">Name</InputLabel>
          <InputField
            id="name"
            type="text"
            name="user_name"
            required
            isDarkMode={isDarkMode}
          />
          <InputLabel htmlFor="subject">Subject</InputLabel>
          <InputField
            id="subject"
            type="text"
            name="subject"
            required
            isDarkMode={isDarkMode}
          />
          <InputLabel htmlFor="email">Email</InputLabel>
          <InputField
            id="email"
            type="email"
            name="email"
            required
            isDarkMode={isDarkMode}
          />
          <InputLabel htmlFor="message">Message</InputLabel>
          <MessageTextArea
            id="message"
            rows={8}
            placeholder="Type your message here..."
            name="message"
            required
            isDarkMode={isDarkMode}
          />
          <SubmitButton>SEND MESSAGE</SubmitButton>
        </Form>
      </FormContainer>
    </ContactSectionContainer>
  );
}

export default ContactSection;
