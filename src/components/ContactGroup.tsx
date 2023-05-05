import { ContactInfo, contacts } from "../ProfileData";

const ContactItem = ({ name, link, Icon }: ContactInfo) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={link}
    className="contact__link"
    aria-label={name}
  >
    <Icon className="contact__icon" />
  </a>
);

const ContactGroup = () => {
  return (
    <div className="contact__group">
      {contacts.map((contact, key) => (
        <ContactItem {...{ ...contact, key }} />
      ))}
      <div className="contact__line"></div>
    </div>
  );
};

export default ContactGroup;
