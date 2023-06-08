import { BsGithub, BsYoutube } from "react-icons/bs";
import { projects, Project, Info } from "../ProfileData";
import Accordion from "./Accordion";

const MoreInfo = (info: Info) => (
  <div className="project__info">
    {info.myRole && (
      <div className="info__content">
        <h4 className="info__title">My Role</h4>
        <p className="info__text">{info.myRole}</p>
      </div>
    )}
    {info.difficulty && (
      <div className="info__content">
        <h4 className="info__title">Project Difficulties</h4>
        <p className="info__text">{info.difficulty}</p>
      </div>
    )}
    {info.difficulty && (
      <div className="info__content">
        <h4 className="info__title">My Solution</h4>
        <p className="info__text">{info.solution}</p>
      </div>
    )}
    {!!(info?.features ?? []).length && (
      <div className="info__content">
        <h4 className="info__title">Notable Features</h4>
        <ul>
          {info.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const ProjectComponent = ({ project }: { project: Project }) => {
  return (
    <div className="projects__project">
      <a href={project.links.liveUrl}>
        <img
          className={`project__image project-image-${projects.findIndex(
            (arrProject) => arrProject.name === project.name
          )}`}
          src={project.image}
          alt={project.name}
        />
      </a>
      <div className="project__content">
        <span className="project__title">{project.name}</span>
        <p className="project__description">{project.description}</p>
        <div className="project__technologies">
          {project.technologies.map((technology, idx) => (
            <span key={idx} className="project__technology">
              {technology}
            </span>
          ))}
        </div>
        <Accordion name={"More Info"}>
          <MoreInfo {...project.info} />
        </Accordion>
        <div className="project__links">
          <a
            href={project.links.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project__demo"
          >
            Live Demo
          </a>
          <a
            href={project.links.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project__link"
          >
            <BsGithub className="link__icon" />
          </a>
          {project.links?.videoUrl ? (
            <a
              className="project__link"
              href={project.links?.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube className="link__icon" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="app__projects">
      <h2 className="projects__title">Projects</h2>
      <div className="projects__container">
        {projects.map((project, idx) => (
          <ProjectComponent {...{ project, key: idx }} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
