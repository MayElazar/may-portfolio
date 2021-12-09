import React from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

function Project(props) {
  const link = props.deploy ? props.demoLink : "";
  return (
    <div className={props.bg ? "bg-white-whiteGray" : "bg-white-whitey"}>
      <div className="flex p-4 mb-2 m-auto  md:w-10/12 items-center">
        <div className="hidden md:flex-1 md:flex  sm:flex shadow-xl mr-8">
          <img src={props.img} alt="project_picture" />
        </div>
        <div className="md:w-3/5 flex flex-col flex-end justify-between">
          <div className="flex flex-col space-y-6">
            <h4 className="text-xl ">{props.name}</h4>
            <p>{props.aboutProj}</p>
          </div>
          <div className="flex mt-6">
            <a href={props.gitLink} target="_blank" rel="noreferrer">
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
              data-tip={props.deploy ? "" : "This project wasnt' deployed yet"}
            >
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={props.deploy ? "" : "disabled"}
              >
                <motion.button
                  className={
                    "p-1 border-2 rounded-md  border-pink-pinkGlow text-pink-pinkGlow flex w-32 items-center justify-center " +
                    (props.deploy
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
  );
}

export default Project;
