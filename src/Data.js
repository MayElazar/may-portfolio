import { v4 as uuidv4 } from "uuid";

function ProjectData() {
  return [
    {
      name: "'Music App' - Music player",
      deploy: true,
      img: "https://drive.google.com/uc?export=view&id=1byRZq-RsAPyUnPSb7bsD5R6g-nps97H3",
      techLang: "Sugi.wa",
      video: "",
      aboutProj:
        "A simple music player with embeded libarary songs. Just play, skip and listen to great songs.",
      gitLink: "https://github.com/MayElazar/MusicPlayer_react",
      demoLink: "https://mayelazar.github.io/MusicPlayer_react/index.html",
      bg: false,
      id: uuidv4(),
    },
    {
      name: "'AnimaBook' - Socialmedia for your pets",
      deploy: false,
      img: "https://drive.google.com/uc?export=view&id=1cYYfgqVDYar230T6onriecMEGNpGa28h",
      techLang: "Sugi.wa",
      video: "",
      aboutProj:
        "'AnimaBook' is a social media inspired by instagram. This media designed for people that own pets, you can post your animale pictures, like, comment and go to your pet personal profile. Now you can get to Know new friends for your pets.",
      gitLink: "https://github.com/MayElazar/Demo_AnimaBook",
      demoLink: "",
      bg: true,
      id: uuidv4(),
    },
    {
      name: "'Tips' - Website",
      deploy: true,
      img: "https://drive.google.com/uc?export=view&id=1nxJWAmnFmajkgzE-H2uYdzl15h7MDwtU",
      techLang: "Sugi.wa",
      video: "",
      aboutProj:
        "A iteractive site that provides short tips on accompanying and appreciating volunteers. The site was developed in collaboration with the 'Israeli Volunteer Council'. our users can add there own tips, like others tips and make this media bigger and cooperative.",
      gitLink: "https://github.com/MayElazar/Tips_Website",
      demoLink: "https://projects.telem-hit.net/2021/Tips_OriMay/",
      bg: false,
      id: uuidv4(),
    },
    {
      name: "'Moshe the fish' - game",
      deploy: true,
      img: "https://drive.google.com/uc?export=view&id=14lRz1OnjC7DoaWhSsKf2aS-_vTQ3nPUh",
      techLang: "Sugi.wa",
      video: "",
      aboutProj:
        "'Moshe the fish' is a game and a game generator. This project designed for instructors and learnes, Its allows them to create identification skills exercieses. In this project you will be able to create your own game contect and practice.",
      gitLink: "https://github.com/MayElazar/Moshe-the-fish-Game",
      demoLink:
        "http://triangle.telem-hit.net/2020/spring/MosheTheFish_OriLiatMay/index.html",
      bg: true,
      id: uuidv4(),
    },
  ];
}

export default ProjectData;
