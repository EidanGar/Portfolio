const description =
  "As a front-end developer, I specialize in creating responsive websites that engage users and drive results. With a passion for clean code and intuitive design, I create digital experiences that are both visually appealing and user-friendly. I am proficient in a variety of front-end technologies, including HTML, SCSS, TypeScript, and React. My dedication to staying up-to-date with the latest trends in the industry allow me to deliver innovative and effective solutions to every project.";

const AboutMe = () => {
  return (
    <div id="about" className="app__about">
      <img
        src="https://i.postimg.cc/L6Yrwr00/Portfolio-About-Me-Image.png"
        alt="Guy talking with his coworkers via his computer."
        className="about__image"
      />
      <div className="about__content">
        <span className="about__header">About me</span>
        <span className="about__title">
          Crafting websites that captivate and convert.
        </span>
        <p className="about__description">{description}</p>
      </div>
    </div>
  );
};

export default AboutMe;
