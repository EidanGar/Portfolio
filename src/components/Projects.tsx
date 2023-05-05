import { BsGithub, BsYoutube } from "react-icons/bs";
import { useRef } from "react";

type Project = {
  name: string;
  description: string;
  links: {
    codeUrl: string;
    liveUrl: string;
    videoUrl?: string;
  };
  image: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    name: "Sorting Algorithm Visualizer",
    description:
      "This is a Sorting Algorithm Visualizer web app that lets users visualize sorting algorithms, like Bubble Sort and Merge Sort, with real-time animation. Users can select sorting algorithms, adjust animation speed, and change array size.",
    links: {
      codeUrl: "https://github.com/EidanGar/SortingVisualizer",
      liveUrl: "https://codesandbox.io/s/github/EidanGar/SortingVisualizer",
      videoUrl:
        "https://drive.google.com/file/d/10-48A6BFwyJxKkYvi4B7X3NcOvnui5cv/view?usp=drivesdk"
    },
    image: "https://i.postimg.cc/t4Pp2YZS/Sorting-Visualizer-1.png",
    technologies: ["Styled-components", "React", "TypeScript"]
  },
  {
    name: "CoinTrackr",
    description:
      "A modern and user-friendly Crypto Tracker that allows users to stay up-to-date with real-time data on various cryptocurrencies. Perfect for cryptocurrency investors and enthusiasts. (Volatile Api, info might be outdated)",
    links: {
      codeUrl: "https://github.com/EidanGar/CoinTrackr",
      liveUrl: "https://eidangar.github.io/CoinTrackr/",
      videoUrl:
        "https://drive.google.com/file/d/1uCGj4Cu8kAcVN-yPWiEUcjalUSE9fMMi/view?usp=drivesdk"
    },
    image: "https://i.postimg.cc/bvzWkJQ2/Coin-Trackr.png",
    technologies: ["React", "TypeScript", "AJAX"]
  },
  {
    name: "Employee Directory",
    description:
      "Easily manage your organization's personnel information with this Employee Directory application. Search, filter, and view employee profiles with a user-friendly interface that works on desktop and mobile devices.",
    links: {
      codeUrl: "https://github.com/EidanGar/EmployeeDirectory",
      liveUrl: "https://codesandbox.io/s/github/EidanGar/EmployeeDirectory",
      videoUrl: ""
    },
    image: "https://i.postimg.cc/Kv328RNG/Employee-Directory.png",
    technologies: [
      "Bootstrap",
      "React",
      "TypeScript",
      "Redux",
      "React-router",
      "AJAX"
    ]
  }
];

const ProjectComponent = ({ project }: { project: Project }) => {
  const projectImageRef = useRef<HTMLImageElement>(null);

  const resizeImage = () => {
    if (projectImageRef.current == null) return;
    const image = projectImageRef.current;
    if (image.offsetHeight < (image.parentElement?.offsetHeight ?? 400)) {
      image.style.height = "100%";
    }
  };

  return (
    <div className="projects__project">
      <a href={project.links.liveUrl}>
        <img
          onLoad={resizeImage}
          ref={projectImageRef}
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
            <span key={idx} className="project__technology">{technology}</span>
          ))}
        </div>
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
