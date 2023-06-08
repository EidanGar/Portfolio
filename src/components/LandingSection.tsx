import { BsGithub, BsLinkedin } from "react-icons/bs";
import { contacts } from "../ProfileData";

const LandingSection = () => {
  return (
    <div id="home" className="app__landing">
      <div className="landing__content">
        <span className="landing__intro">Hi There</span>
        <h2 className="landing__header">
          I'm <span style={{ color: "rgb(40, 162, 250)" }}>Eidan Garcia</span>
        </h2>
        <span className="landing__phrase">I am a Web Developer</span>
        <div className="landing__links">
          <a
            href={contacts[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="links__resume"
          >
            Resume
          </a>
          <a
            href="http://https://github.com/EidanGar"
            target="_blank"
            rel="noopener noreferrer"
            className="links__link"
          >
            <BsGithub className="links__icon" />
          </a>
          <a
            href="http://inkedin.com/in/egar03/"
            target="_blank"
            rel="noopener noreferrer"
            className="links__link"
          >
            <BsLinkedin className="links__icon" />
          </a>
        </div>
      </div>
      <img
        className="landing__image"
        src="https://i.postimg.cc/wBxCmVJp/Portfolio-Hero-Image.png"
        alt="Man coding"
      />
    </div>
  );
};

export default LandingSection;
