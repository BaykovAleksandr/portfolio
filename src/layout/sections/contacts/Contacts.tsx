import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "../contacts/Contacts_Styles";
import emailjs from "@emailjs/browser";
import { ElementRef, useRef } from "react";

export const Contact: React.FC = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    emailjs
      .sendForm("service_arv2mhy", "template_lsqr8fg", form.current, {
        publicKey: "yMPQ5mSa-h0st5Vs2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.currentTarget.reset();
  };
  return (
    <S.Contacts id={"contact"}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder="name" name="name" />
          <S.Field required placeholder="email" name="email" />
          <S.Field required placeholder="subject" name="subject" />
          <S.Field required placeholder="message" as={"textarea"} name="message" />
          <Button type="submit">SEND MESSAGE</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
