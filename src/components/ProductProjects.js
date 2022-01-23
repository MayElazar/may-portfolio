import React from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { v4 as uuidv4 } from "uuid";

export default function ProductProjects(props) {
  const link = props.props.deploy ? props.props.demoLink : "";
  return (
    <>
      {" "}
      {console.log(props.props)}
      {props.props.tag === "code" && (
        <div
          className={props.props.bg ? "bg-white-whiteGray" : "bg-white-whitey"}
        >
          <div className="flex flex-col md:flex-row p-4 mb-2 m-auto  md:w-10/12 items-center">
            <div className=" md:flex-1 md:flex  sm:flex shadow-xl mr-8 mb-10">
              <img src={props.props.img} alt="project_picture" />
            </div>
            <div className="md:w-3/5 flex flex-col flex-end justify-between w-full">
              <div className="flex flex-col space-y-6">
                <h4 className="text-xl ">{props.props.name}</h4>
                <p>{props.props.aboutProj}</p>
                <div>
                  <p className="mb-2">Technology I used:</p>
                  <ul className="flex space-x-2 items-center">
                    {console.log(props.props.techLang.length > 0)}
                    {props.props.techLang.length > 0 &&
                      props.props.techLang.map((lang) => (
                        <li key={uuidv4()}>
                          <img src={lang} alt="program icon" className="w-10" />
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              <div className="flex mt-6">
                <a href={props.props.gitLink} target="_blank" rel="noreferrer">
                  <motion.button
                    className={
                      "p-1 bg-pink-pinkGlow rounded-md text-white-whitey mr-4 w-32 "
                    }
                    whileHover={{
                      rotate: [0, 20, 0],
                      scale: 1.2,
                      transition: { duration: 0.5 },
                    }}
                    whileTap={{
                      rotate: [0, 20, 0],
                      scale: 1.2,
                      transition: { duration: 0.5 },
                    }}
                  >
                    Git
                  </motion.button>
                </a>
                <div
                  data-tip={
                    props.props.deploy ? "" : "This project wasnt' deployed yet"
                  }
                >
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className={props.props.deploy ? "" : "disabled"}
                  >
                    <motion.button
                      className={
                        "p-1 border-2 rounded-md  border-pink-pinkGlow text-pink-pinkGlow flex w-32 items-center justify-center " +
                        (props.props.deploy
                          ? "opacity-100"
                          : "opacity-50 cursor-not-allowed")
                      }
                      whileHover={{
                        rotate: [0, 20, 0],
                        scale: 1.2,
                        transition: { duration: 0.5 },
                      }}
                      whileTap={{
                        rotate: [0, 20, 0],
                        scale: 1.2,
                        transition: { duration: 0.5 },
                      }}
                      //disabled={!props.deploy}
                    >
                      Demo
                    </motion.button>
                  </a>
                </div>
                <ReactTooltip />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
