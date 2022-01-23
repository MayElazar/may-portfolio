import React from "react";
import { DownloadIcon } from "@heroicons/react/solid";
import MyImg from "../img/MeCharecter.svg";
import { motion } from "framer-motion";
//import Projects from "./projects";
function Header() {
  return (
    <div className="bg-white-whiteGray  ">
      <div className="flex pt-6 justify-evenly">
        <div className="p-4 mb-2">
          <motion.h2
            whileHover={{
              rotate: [0, 10, 0],
              transition: { duration: 1 },
            }}
            whileTap={{ rotate: [0, 10, 0] }}
            animate={{ rotate: [0, 10, 0], transition: { duration: 2 } }}
            className="text-2xl w-auto inline-block"
          >
            <span className="SpecialFont">Hey!</span> I'm May,
          </motion.h2>
          <motion.p
            animate={{ x: [-600, 0], transition: { duration: 3 } }}
            className="text-pink-pinkGlow text-2xl"
          >
            I'm a frontend developer & designer.
          </motion.p>
          <p>
            I believe that the web is just getting bigger and it's the primary
            way to connect to users all over the world.
            <br /> Because of that I believe every product needs a well design
            and functional website.
            <br />I am a self-taught developer and a problem solver, I care a
            lot about UX and UI.
            <br /> Looking for a new oppertonty. Do you have one?
          </p>

          <div className="flex pt-4 pb-4">
            <a href="#ContectMeSection" className="flex">
              <motion.button
                className="p-1 bg-pink-pinkGlow rounded-md text-white-whitey mr-4"
                whileHover={{
                  rotate: [0, 20, 0],
                  //scale: 1.2,
                  transition: { duration: 0.5 },
                }}
                whileTap={{
                  rotate: [0, 20, 0],
                  //scale: 1.2,
                  transition: { duration: 0.5 },
                }}
              >
                Let's meet for coffee!
              </motion.button>
            </a>
            <a
              href="https://drive.google.com/file/d/1bnaNptuo5Zq-NgI17uvxFsL48b5pnmz9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <motion.button
                className="p-1 border-2 rounded-md  border-pink-pinkGlow text-pink-pinkGlow flex w-32 items-center justify-center"
                whileHover={{
                  rotate: [0, 20, 0],
                  // scale: 1.2,
                  transition: { duration: 0.5 },
                }}
                whileTap={{
                  rotate: [0, 20, 0],
                  // scale: 1.2,
                  transition: { duration: 0.5 },
                }}
              >
                <DownloadIcon className="w-8" /> <span>My CV</span>
              </motion.button>{" "}
            </a>
          </div>
        </div>

        <img
          src={MyImg}
          alt="Maypicture"
          className="hidden md:block h-40 mr-5 "
        />
        {/*<Projects />*/}
      </div>
    </div>
  );
}

export default Header;
