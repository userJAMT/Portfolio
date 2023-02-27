import "./FormStyles.css";

import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Result = () => {
  const theme = useContext(ThemeContext);
  const { language } = theme.state;
  return (
    <p>
      {language === "EN"
        ? "Message sent successfully. I'll contact you soon."
        : "Tu mensaje ha sido enviado satisfactoriamente. Te contactaré pronto."}
    </p>
  );
};

const Form = () => {
  const theme = useContext(ThemeContext);
  const { language } = theme.state;
  const form = useRef();
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`
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
    showResult(true);
  };

  // Hide result
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>{language === "EN" ? "Name" : "Nombre"}</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>{language === "EN" ? "Subject" : "Tema"}</label>
      <input type="text" name="subject" required />
      <label>{language === "EN" ? "Message" : "Mensaje"}</label>
      <textarea
        name="message"
        placeholder={
          language === "EN"
            ? "Write your message here"
            : "Escribe tu mensaje aquí"
        }
        required
      />
      <input
        className="btn"
        type="submit"
        value={language === "EN" ? "Submit" : "Enviar"}
      />
      <div className="row">{result ? <Result /> : null}</div>
    </form>
  );
};

export default Form;
