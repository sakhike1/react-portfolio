import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "React,VueJs,NuxtJs",
    icon: mobile,
  },
  {
    title: "Front-end developer",
    icon: backend,
  },
  {
    title: "UI/UX design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },


  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "React.js Developer and Vue.Js",
    iconBg: "#000",
    points: [
      "Developed and maintained web applications using React.js and Vue.js to optimize user experience",
      "Implemented responsive design and cross-browser compatibility for optimal usability",
      "Collaborated with designers and developers to ensure efficient project completion",
      "Participated in code reviews, provided constructive feedback, and collaborated on debugging issues",
    ],
  },
  {
    title: "Figma",
    iconBg: "#000",
    points: [
      "Translated high-fidelity designs into responsive, functional code using React.js and Vue.js for mobile applications",
      "Ensured pixel-perfect, eye-pleasing UI aligned with brand guidelines",
      "Implemented mobile-first, responsive design for seamless experience across devices",
      "Integrated UI components with API services for dynamic content and smooth performance",
    ],
  },
  {
    title: "3D Design and Web Development Using Canvas",
    iconBg: "#000",
    points: [
      "Developed and maintained web applications using React.js and Vue.js, ensuring smooth, scalable performance",
      "Integrated RESTful APIs and GraphQL into applications, allowing for dynamic content and real-time data updates",
      "Utilized Git and VSCode for efficient development, and implemented 3D design using Canvas",
      "Collaborated with cross-functional teams to transform requirements into high-quality products while ensuring cross-browser compatibility and optimal performance through testing and optimization",
    ],
  },
  {
    title: "Flutter/React Native ",
    iconBg: "#000",
    points: [
      "Developed and maintained mobile applications using Flutter and React Native, ensuring high-performance and cross-platform compatibility",
      "Integrated RESTful APIs and GraphQL into mobile apps, enabling real-time data updates and dynamic content",
      "Collaborated with cross-functional teams, including designers, product managers, and developers, to transform requirements into functional, user-friendly mobile apps",
      "Conducted thorough testing and debugging to ensure app performance and cross-device compatibility",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Online Store",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "Vue",
        color: "blue-text-green",
      },
      {
        name: "Vuex",
        color: "green-text-vue",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Vue blog",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "VueJs",
        color: "blue-text-green",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "gym app",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
