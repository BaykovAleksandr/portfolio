import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { S } from "../contacts/Contacts_Styles";
import emailjs from "@emailjs/browser";
import { ElementRef, useRef, useState } from "react";

export const Contact: React.FC = () => {
  const form = useRef<ElementRef<"form">>(null);
  const [emailError, setEmailError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    if (email && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    const formData = new FormData(form.current);
    const email = formData.get("email") as string;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    emailjs
      .sendForm("service_arv2mhy", "template_lsqr8fg", form.current, {
        publicKey: "yMPQ5mSa-h0st5Vs2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setEmailError("");
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
          <S.Field
            required
            placeholder="email"
            name="email"
            type="email"
            onChange={handleEmailChange}
          />
          {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}
          <S.Field required placeholder="subject" name="subject" />
          <S.Field
            required
            placeholder="message"
            as={"textarea"}
            name="message"
          />
          <Button type="submit" disabled={!!emailError}>
            SEND MESSAGE
          </Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
