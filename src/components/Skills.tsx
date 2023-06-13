import {
  cssIcon,
  htmlIcon,
  javascriptIcon,
  typescriptIcon,
  bootstrapIcon,
  sassIcon,
  reactIcon,
  reduxIcon,
  gitIcon,
  nextjsIcon,
  tailwindcssIcon,
} from "../images";

type Skill = {
  icon: any;
  skillName: string;
};

const mySkills: Skill[] = [
  {
    skillName: "HTML",
    icon: htmlIcon,
  },
  {
    skillName: "CSS",
    icon: cssIcon,
  },
  {
    skillName: "JavaScript",
    icon: javascriptIcon,
  },
  {
    skillName: "TypeScript",
    icon: typescriptIcon,
  },
  {
    skillName: "Boostrap",
    icon: bootstrapIcon,
  },
  {
    skillName: "React",
    icon: reactIcon,
  },
  {
    skillName: "SASS",
    icon: sassIcon,
  },
  {
    skillName: "Redux",
    icon: reduxIcon,
  },
  {
    skillName: "Git",
    icon: gitIcon,
  },
  {
    skillName: "NextJS",
    icon: nextjsIcon,
  },
  {
    skillName: "TailwindCSS",
    icon: tailwindcssIcon,
  },
];

const Skills = () => {
  return (
    <div className="app__skills">
      <div className="skills__header">
        <span>I am proficient in</span>
        <h2 className="skills__title">Skills</h2>
      </div>
      <div className="skills__container">
        {mySkills.map((skill, idx) => (
          <div title={skill.skillName} key={idx} className="skills__bubble">
            <img
              className="skills__icon"
              src={skill.icon}
              alt={skill.skillName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
