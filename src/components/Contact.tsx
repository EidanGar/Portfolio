import { ContactInfo, contacts } from "../ProfileData";
import { useState, ChangeEvent } from "react";

const ContactComponent = ({ Icon, name, link }: ContactInfo) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={link}
    className="contact__component"
  >
    <Icon className="component__icon" />
    <span className="component__name">{name}</span>
  </a>
);

const FreepikAttribution = () => (
  <div className="app__attribution">
    <span className="attribution">
      Image at header by{" "}
      <a href="https://www.freepik.com/free-vector/colourful-illustration-programmer-working_5483080.htm">
        Freepik
      </a>
    </span>
    <span className="attribution">
      Image at about me by{" "}
      <a href="https://www.freepik.com/free-vector/telecommuting-home-concept_7607504.htm#from_view=detail_alsolike#position=0">
        Freepik
      </a>
    </span>
    <span className="attribution">
      <a href="https://www.flaticon.com/free-icons/person" title="person icons">
        Person icons created by Freepik - Flaticon
      </a>
    </span>
  </div>
);

interface Email {
  name: string;
  address: string;
  subject: string;
  body: string;
}

const defaultEmail = {
  name: "",
  address: "",
  subject: "",
  body: ""
};

const Contact = () => {
  const [emailData, setEmailData] = useState<Email>(defaultEmail);

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setEmailData((prev) => ({ ...prev, [name]: value }));
  };
  
  return (
    <div id="contact">
      <div className="email__container">
        <span className="contact__header">
          Feel free to shoot me a message{" "}
          <span role="img" aria-label="Finger pointing down">
            👇
          </span>
        </span>
        <form className="contact__form">
          <input
            onChange={onInputChange}
            name="name"
            type="text"
            placeholder="Name"
            className="contact__input"
          />
          <input
            name="address"
            type="email"
            placeholder="Email Address"
            className="contact__input"
            onChange={onInputChange}
          />
          <input
            onChange={onInputChange}
            name="subject"
            type="text"
            placeholder="Subject"
            className="contact__input"
          />
          <textarea
            onChange={onInputChange}
            name="body"
            placeholder="Your message"
            className="contact__input"
          />
          <a
            className="contact__send"
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:eidangarcia787i@gmail.com?subject=${emailData.subject}%20Email&body=${emailData.body}.`}
          >
            Send Mail
          </a>
        </form>
      </div>
      <div className="contact__container">
        {contacts.map((contact, key) => (
          <ContactComponent {...{ ...contact, key }} />
        ))}
        <FreepikAttribution />
      </div>
    </div>
  );
};

export default Contact;
