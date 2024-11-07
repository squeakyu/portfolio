import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = 'I am a dedicated full stack developer with a talent for building robust and scalable web applications. With 5 years of hands-on experience, I have developed strong proficiency in front-end technologies such as React and Next.js, along with back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My aim is to apply my expertise to develop innovative solutions that foster business growth and provide outstanding user experiences.';

export const ABOUT_TEXT = 'I am a senior computer science major at the University of Massachusetts Amherst. I have a passion for creating innovative software solutions and driven by a strong commitment to continuous learning, problem-solving, and collaborating with others to build impactful applications. Fun fact about me: I love playing video games like VALORANT and djing!';

export const PROJECTS = [
  {
    title: "Fitness Tracker Website",
    image: project1,
    description:
      "A fitness tracker web application allowing users to monitor activities, manage data offline, and track workouts.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as CRUD, assignment, and progress tracking.",
    technologies: ["Rust", "PostgreSQL", "Docker"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Scrabble",
    image: project4,
    description:
      "A fully interactive Scrabble game that features a dynamic tile rack and real-time game state updates",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  linkedIn: "https://www.linkedin.com/in/richard-lu12/",
  email: "richardlu@umass.edu",
};
