import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MyImg from "../img/profilePic.jpg";
function AboutMe() {
  return (
    <div className="bg-white-whiteGray ">
      <div className="flex flex-col md:flex-row md:space-x-32 xl:space-x-52 justify-evenly p-6 w-4/5 m-auto items-center">
        <div className="flex flex-col justify-evenly space-y-20">
          <img
            src={MyImg}
            alt="May Elazar"
            className="w-1/4 rounded-2xl shadow-lg md:hidden m-auto"
          />
          <div>
            <h1 className="mb-4 text-2xl ">
              <span className="SpecialFont">Nice to meet you!</span> I'm May
            </h1>

            <p>
              Ever since I can remember I have always loved design, I did not
              know the world of programming and frontend in particular.
              <br />
              During my degree in 'learning technologies' at HIT I discovered
              new worlds, whether it's the UX world or the programming aspect. I
              just fell in love with the concept that I can build something from
              scratch. From the idea to the finished product. I discovered a
              whole world that never ends, you can always learn more and
              develop.
              <br />
              These days I am looking for my first job. Do you have any
              suggestions?
            </p>
          </div>
          <Link to="/">
            <motion.button
              className=" bg-pink-pinkGlow rounded-md text-white-whitey mr-4 p-2"
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
              {" "}
              Check out my work
            </motion.button>
          </Link>
        </div>
        <img
          src={MyImg}
          alt="May Elazar"
          className="w-1/5 rounded-2xl shadow-lg hidden md:block"
        />
      </div>
    </div>
  );
}

export default AboutMe;
