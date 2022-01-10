import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  //animation
  const animation = {
    //rotate: [0, 20, 0],
    scale: 1.2,
    transition: { duration: 0.5 },
  };
  return (
    <div>
      <nav className="flex justify-between p-3">
        <div className="flex">
          <NavLink to="/">
            <h1 className="text-3xl sm:text-3xl">May Elazar</h1>
            <p className="text-xs sm:text-xs SpecialFont sm:block">
              frontend developer & designer
            </p>
          </NavLink>
        </div>
        <div className="flex  flex-row items-center">
          <div>
            <div
              className={
                "md:hidden " +
                (navbarOpen
                  ? " h-screen w-1/4 absolute right-0 pr-3 bg-white-whitey shadow-xl"
                  : "")
              }
            >
              <div className="relative ">
                <MenuIcon
                  className={
                    !navbarOpen ? "block h-12 cursor-pointer" : "hidden"
                  }
                  onClick={() => setNavbarOpen(!navbarOpen)}
                />
                <XIcon
                  className={
                    !navbarOpen
                      ? "hidden"
                      : "block h-12 cursor-pointer absolute right-3 "
                  }
                  onClick={() => setNavbarOpen(!navbarOpen)}
                />
              </div>
              <div className={navbarOpen ? "relative top-16" : "hidden"}>
                <ul className="flex  flex-col justify-items-start  bg-white-whitey space-y-4 p-5">
                  <li className=" text-sm sm:text-base">
                    <a href="#ContectMeSection" className="">
                      Contect me
                    </a>
                  </li>
                  <li className=" text-sm sm:text-base">
                    <NavLink to="/AboutMe">About me</NavLink>
                  </li>
                  <li className="text-pink-pinkGlow  text-sm sm:text-base">
                    <a
                      href="https://drive.google.com/file/d/1bnaNptuo5Zq-NgI17uvxFsL48b5pnmz9/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download my CV
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="hidden md:flex  flex-row justify-evenly items-center space-x-7 ">
              <motion.li
                whileHover={animation}
                whileTap={animation}
                className=" text-sm sm:text-base cursor-pointer"
              >
                <a href="#ContectMeSection" className="">
                  {" "}
                  Contect me
                </a>
              </motion.li>
              <motion.li
                className=" text-sm sm:text-base cursor-pointer"
                whileHover={animation}
                whileTap={animation}
              >
                <NavLink to="/AboutMe">About me</NavLink>
              </motion.li>
              <motion.li
                className="text-pink-pinkGlow  text-sm sm:text-base cursor-pointer"
                whileHover={animation}
                whileTap={animation}
              >
                <a
                  href="https://drive.google.com/file/d/1bnaNptuo5Zq-NgI17uvxFsL48b5pnmz9/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download my CV
                </a>
              </motion.li>
            </ul>
          </div>
          {/*<button>Contect me</button>
          <button>About me</button>
          <button>Download my CV</button>*/}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
