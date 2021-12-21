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
        "A simple music player. Just play, skip and listen to great songs.",
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
        "'AnimaBook' is a social media inspired by Instagram. This media is designed for people that own pets, you can post your pet pictures, like, comment, and go to your pet's personal profile. Now you can get to Know new friends for your pets.",
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
        "An interactive site that provides short tips on accompanying and appreciating volunteers. The site was developed in collaboration with the 'Israeli Volunteer Council'. our users can add their own tips, like others tips and make this media bigger and cooperative.",
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
        "'Moshe the fish' is a game and a game generator. This project is designed for instructors and learners, It allows them to create identification skills exercises. In this project, you will be able to create your own game content and practice.",
      gitLink: "https://github.com/MayElazar/Moshe-the-fish-Game",
      demoLink:
        "http://triangle.telem-hit.net/2020/spring/MosheTheFish_OriLiatMay/index.html",
      bg: true,
      id: uuidv4(),
    },
  ];
}

export default ProjectData;
