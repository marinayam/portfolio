import {
  codeSlash,
  layoutTextWindow,
  logo
} from "../assets";

const skills = [
  {
    image:codeSlash,
    title:"Web Engineer",
    features_title: "Language",
    experience: "HTML, CSS, Javascript,PHP, SQL",
    features_subtitle: "flamework,Tools",
    tools: [
      {
        name: "React",
      },
      {
        name: "Sass",
      },
      {
        name: "jQuery",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "Tailwind",
      },
      {
        name: "Next.js",
      },
      {
        name: "Laravel",
      },
      {
        name: "Git",
      },
    ],
  },
  {
    image:layoutTextWindow,
    title:"Web Designer",
    features_title:"Experience",
    experience: "UX, UI, Web,Thumbnail",
    features_subtitle:"Tools",
    tools: [
      {
        name: "Figma",
      },
      {
        name: "Wordpress",
      },
      {
        name: "Webflow",
      },
      {
        name: "Wix",
      },
    ],
  },
];
const projects = [
  {
    name: "project1",
    description:
      "project1説明",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: logo,
    source_code_link: "https://github.com/",
  },
  {
    name: "project2",
    description:
      "project2説明",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mangodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: logo,
    source_code_link: "https://github.com/",
  },
];

export { skills, projects };