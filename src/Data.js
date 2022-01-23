import { v4 as uuidv4 } from "uuid";
//import images
import firebase from "../src/img/icons/firebase.png";
import react from "../src/img/icons/react.png";
import sass from "../src/img/icons/sass.svg";
import css from "../src/img/icons/css.svg";
import nextjs from "../src/img/icons/nextjs.svg";
import js from "../src/img/icons/javascript.svg";
import html from "../src/img/icons/html.svg";
import sql from "../src/img/icons/sql.png";
import xml from "../src/img/icons/xml.png";
import cSharp from "../src/img/icons/c-sharp.png";
import redux from "../src/img/icons/redux.png";

function iconsImg() {
  return [
    {
      iconsImg: [
        react,
        redux,
        js,
        html,
        sass,
        css,
        sql,
        firebase,
        xml,
        cSharp,
        nextjs,
      ],
    },
  ];
}
function ProjectData() {
  return [
    {
      name: "'To Do App' - Time your Tasks",
      deploy: true,
      img: "https://drive.google.com/uc?export=view&id=1xr4x-61phc5oC8AcGPAidvZlu_M_Y2gZ",
      techLang: [react, css, redux],
      video: "",
      aboutProj:
        "Having trouble keeping up with your daily tasks? no more! this app will help you to write down all your tasks and even set a timer for each task",
      gitLink: "https://github.com/MayElazar/timer-app",
      demoLink: "https://todays-tasks-app.netlify.app/",
      bg: false,
      id: uuidv4(),
      tag: "code",
    },
    {
      name: "'Music App' - Music player",
      deploy: true,
      img: "https://drive.google.com/uc?export=view&id=17hPtlHKQJtUfbuVWouEUjaeS9yN_Ldj5",
      techLang: [react, sass],
      video: "",
      aboutProj:
        "A simple music player. Just play, skip and listen to great songs.",
      gitLink: "https://github.com/MayElazar/MusicPlayer_react",
      demoLink: "https://mayelazar.github.io/MusicPlayer_react/index.html",
      bg: true,
      id: uuidv4(),
      tag: "code",
    },
    {
      name: "'Builing blocks' - project manager",
      deploy: true,
      img: "https://drive.google.com/uc?export=view&id=1cf18lxWW13kAo889w3WQSVSfEyacBc81",
      techLang: [react, css, firebase],
      video: "",
      aboutProj:
        "'Building blocks is a project management site. This media is designed for people to manage a team of people or to organize their own projects and assignments.",
      gitLink: "https://github.com/MayElazar/Building-blocks---project-manager",
      demoLink: "https://building-blocks-manager.netlify.app",
      bg: false,
      id: uuidv4(),
      tag: "code",
    },
    {
      name: "'Tips' - Website",
      deploy: true,
      img: "https://drive.google.com/uc?export=view&id=1pscPii5Hp5fusW50ZD1GoIz_d4EhYOFU",
      techLang: [html, css, js, sql, cSharp],
      video: "",
      aboutProj:
        "An interactive site that provides short tips on accompanying and appreciating volunteers. The site was developed in collaboration with the 'Israeli Volunteer Council'. our users can add their own tips, like others tips and make this media bigger and cooperative.",
      gitLink: "https://github.com/MayElazar/Tips_Website",
      demoLink: "https://projects.telem-hit.net/2021/Tips_OriMay/",
      bg: true,
      id: uuidv4(),
      tag: "code",
    },
    {
      name: "'Moshe the fish' - game",
      deploy: true,
      img: "https://drive.google.com/uc?export=view&id=146VPc6CBFug3ricODCD9Nx8LhVM2iOGG",
      techLang: [html, css, js, xml, cSharp],
      video: "",
      aboutProj:
        "'Moshe the fish' is a game and a game generator. This project is designed for instructors and learners, It allows them to create identification skills exercises. In this project, you will be able to create your own game content and practice.",
      gitLink: "https://github.com/MayElazar/Moshe-the-fish-Game",
      demoLink:
        "http://triangle.telem-hit.net/2020/spring/MosheTheFish_OriLiatMay/index.html",
      bg: false,
      id: uuidv4(),
      tag: "code",
    },
    {
      name: "'Moshe the fish' - game",
      deploy: true,
      img: "https://drive.google.com/uc?export=view&id=1eC-DNwF92LzH7GXX0EUNKRnWQKzod9P1",
      techLang: "",
      video: "",
      aboutProj:
        "'Moshe the fish' is a game and a game generator. This project is designed for instructors and learners, It allows them to create identification skills exercises. In this project, you will be able to create your own game content and practice.",
      gitLink: "",
      demoLink: "",
      bg: true,
      id: uuidv4(),
      tag: "design",
    },
  ];
}

export { ProjectData, iconsImg };
