//import React from 'react'

import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export default function Contact() {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder="name" />
        <Field placeholder="subject" />
        <Field placeholder="message" as={"textarea"} />
        <Button type="submit">SEND MESSAGE</Button>
      </StyledForm>
    </StyledContacts>
  );
}

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #8f8f6c;
`;

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`;
const Field = styled.input``;
