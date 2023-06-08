import { BsGithub, BsLinkedin, BsEnvelopeFill } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";
import { IconType } from "react-icons";

export type Info = {
  myRole: string;
  difficulty: string;
  solution: string;
  features?: string[];
};

export type Project = {
  name: string;
  description: string;
  links: {
    codeUrl: string;
    liveUrl: string;
    videoUrl?: string;
  };
  image: string;
  technologies: string[];
  info?: Info;
};

export const projects: Project[] = [
  {
    name: "Sorting Algorithm Visualizer",
    description:
      "This is a Sorting Algorithm Visualizer web app that lets users visualize sorting algorithms, like Bubble Sort and Merge Sort, with real-time animation. Users can select sorting algorithms, adjust animation speed, and change array size.",
    links: {
      codeUrl: "https://github.com/EidanGar/SortingVisualizer",
      liveUrl: "https://098ze7.csb.app/",
      videoUrl:
        "https://drive.google.com/file/d/10-48A6BFwyJxKkYvi4B7X3NcOvnui5cv/view?usp=drivesdk"
    },
    image: "https://i.postimg.cc/t4Pp2YZS/Sorting-Visualizer-1.png",
    technologies: ["Styled-components", "React", "TypeScript"],
    info: {
      myRole:
        "As the sole developer, I undertook the entire project independently, ensuring a professional approach throughout.",
      difficulty:
        "Understanding and implementing sorting algorithms like Bubble Sort and Merge Sort was quite challenging for me. I had to spend considerable time researching and grasping the logic behind these algorithms before I could start coding them.",
      solution:
        "To overcome this challenge, I decided to focus on a structured approach. I took the time to thoroughly research and analyze each algorithm, studying their logic and understanding how they work step by step. By breaking down the algorithms into smaller components, I was able to implement them more effectively.",
      features: [
        "Real-time animation showcasing sorting algorithms",
        "Selection of various sorting algorithms",
        "Adjustable animation speed",
        "Ability to modify array size"
      ]
    }
  },
  {
    name: "CoinTrackr",
    description:
      "A modern and user-friendly Crypto Tracker that allows users to stay up-to-date with real-time data on various cryptocurrencies. Perfect for cryptocurrency investors and enthusiasts. (Volatile Api, info might be outdated)",
    links: {
      codeUrl: "https://github.com/EidanGar/CoinTrackr",
      liveUrl: "https://dpjhzl.csb.app/",
      videoUrl:
        "https://drive.google.com/file/d/1uCGj4Cu8kAcVN-yPWiEUcjalUSE9fMMi/view?usp=drivesdk"
    },
    image: "https://i.postimg.cc/bvzWkJQ2/Coin-Trackr.png",
    technologies: ["React", "TypeScript", "AJAX"],
    info: {
      myRole:
        "As the sole developer of CoinTrackr, I took complete ownership of the project, ensuring a professional and meticulous approach throughout the development process.",
      difficulty:
        "One of the key challenges I faced in this project was effectively handling errors and debugging. During the initial stages of development, I encountered difficulties in promptly identifying and resolving issues. This resulted in significant time wasted on tracing errors without a clear plan of action, leading to frustration and decreased productivity.",
      solution:
        "To overcome this struggle, I implemented a structured approach to error handling and debugging. I incorporated robust logging mechanisms throughout the application, capturing relevant information about errors and exceptions. This systematic logging enabled me to track down issues more efficiently and gain valuable insights into their root causes. By adopting this solution, I significantly improved my debugging process and overall development efficiency.",
      features: [
        "User-friendly interface: The application is designed to be intuitive and easy to navigate for a seamless user experience.",
        "Responsive design: CoinTrackr is optimized to work seamlessly on different devices, including desktops, tablets, and mobile phones."
      ]
    }
  },
  {
    name: "Employee Directory",
    description:
      "Easily manage your organization's personnel information with this Employee Directory application. Search, filter, and view employee profiles with a user-friendly interface that works on desktop and mobile devices.",
    links: {
      codeUrl: "https://github.com/EidanGar/EmployeeDirectory",
      liveUrl: "https://3wfts3.csb.app/",
      videoUrl:
        "https://drive.google.com/file/d/1GCBhucMAnTPVa6abMjbS_qspFUWYLJSZ/view?usp=share_link"
    },
    image: "https://i.postimg.cc/Kv328RNG/Employee-Directory.png",
    technologies: [
      "Bootstrap",
      "React",
      "TypeScript",
      "Redux",
      "React-router",
      "AJAX"
    ],
    info: {
      myRole:
        "As the sole developer, I undertook the entire project independently, ensuring a professional approach throughout.",
      difficulty:
        "This project really tested my skills in managing the employee data effectively. Initially, I started building the application without a clear plan or understanding of the data structure required. As a result, I encountered significant issues and wasted a considerable amount of time trying to figure out the best approach.",
      solution:
        "To solve this struggle, I decided to leverage the power of React and Redux. By implementing the react-redux library, I was able to centralize and manage the application state efficiently. I organized the employee data into a Redux store, allowing me to access and update the data from different components seamlessly.",
      features: [
        "Centralized Employee Information Management: Easily accessible and updatable employee records.",
        "Employee Record Management: Efficient maintenance of employee data through addition, editing, and deletion.",
        "Directory Page with Search and Filter Options: Quick and targeted access to employee profiles through search and filter functionality."
      ]
    }
  }
];

export interface ContactInfo {
  Icon: IconType;
  name: string;
  link: string;
}

export const contacts = [
  {
    Icon: IoIosPaper,
    name: "Resume",
    link:
      "https://drive.google.com/file/d/1zFd62I5n_VNx4nyHSHUuLeyeE8wKJvcZ/view?usp=share_link"
  },
  {
    Icon: BsEnvelopeFill,
    name: "Email",
    link: "mailto:eidangarcia787i@gmail.com"
  },
  { Icon: BsLinkedin, name: "LinkedIn", link: "https://www.linkedin.com/in/egar03/" },
  { Icon: BsGithub, name: "Github", link: "http://https://github.com/EidanGar" }
];
