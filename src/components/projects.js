import { React } from "react";
import Project from "./project";

function Projects(props) {
  //console.log(props.data);
  const data = props.data;

  // const [projData, setprojData] = useState([]);
  return (
    <div>
      <div className="flex  items-center relative bottom-3">
        <span className="bg-gray-gray w-1/2 h-1"></span>
        <h3 className="font-light text-3xl pr-4 pl-4">Projects</h3>
        <span className="bg-gray-gray w-1/2 h-1"></span>
      </div>

      {data.map((projData) => (
        <Project
          name={projData.name}
          img={projData.img}
          key={projData.id}
          gitLink={projData.gitLink}
          demoLink={projData.demoLink}
          bg={projData.bg}
          aboutProj={projData.aboutProj}
          deploy={projData.deploy}
        />
      ))}
      {/*data.map((song) => (
        <div className="user" key={song.id}>
          {song.name}
        </div>
      ))*/}
    </div>
  );
}

export default Projects;
