import React from "react";
import { Icon } from "@iconify/react";

function Contectme() {
  return (
    <div className="" id="ContectMeSection">
      <div className="flex  items-center justify-evenly mt-16 bottom-3">
        <span className="bg-gray-gray w-1/6  h-1 md:w-1/2"></span>
        <h3 className="font-light text-3xl pr-4 pl-4 w-56">Contect me</h3>
        <span className="bg-gray-gray  w-1/6  h-1 md:w-1/2"></span>
      </div>
      <p className="flex justify-center p-4">
        Don't be a stranger, send a message :)
      </p>
      <div className="flex justify-center">
        <form
          action="POST"
          className="flex flex-col p-5"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
          netlify
        >
          <label className="flex mb-4">
            <span>Name:</span>
            <input
              name="name"
              type="text"
              className="border-2 border-solid border-gray-gray rounded-md ml-10 focus:border-pink-pinkGlow focus:ring-2  focus:outline-none font-light  p-1"
            />
          </label>
          <label className="flex  mb-4">
            <span>Email:</span>
            <input
              name="email"
              type="email"
              className="border-2 border-solid border-gray-gray rounded-md ml-10 focus:border-pink-pinkGlow focus:ring-2  focus:outline-none font-light  p-1"
            />
          </label>
          <label className="flex  mb-4">
            <span>message:</span>
            <textarea
              name="message"
              className="h-32 border-2 border-solid border-gray-gray rounded-md ml-4 focus:border-pink-pinkGlow focus:ring-2  focus:outline-none font-light  p-1"
            ></textarea>
          </label>

          <div data-netlify-recaptcha="true">
            <input type="hidden" name="contact" value="contact" />
          </div>

          <button
            className=" ml-auto p-1 bg-pink-pinkGlow rounded-md text-white-whitey mr-4 w-32 "
            type="submit"
          >
            Send message
          </button>
        </form>
      </div>

      <div className="bg-white-whiteGray">
        <div className="hidden md:flex  p-4 flex-row justify-evenly">
          <div className="flex ">
            <a
              href="https://github.com/MayElazar"
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                icon="fa-brands:github-square"
                style={{ color: "#F21D56", width: "auto", height: "42px" }}
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/may-elazar/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Icon
                icon="akar-icons:linkedin-fill"
                style={{ color: "#F21D56", width: "auto", height: "42px" }}
              />
            </a>
          </div>
          <div className="flex flex-row items-center">
            <Icon
              icon="bx:bxs-phone"
              style={{
                color: "#F21D56",
                width: "auto",
                height: "42px",
                paddingRight: "10px",
              }}
            />
            <a href="tel:+972543194777">054-3194777</a>
          </div>
          <div className="flex flex-row items-center">
            <Icon
              icon="ic:round-email"
              style={{
                color: "#F21D56",
                width: "auto",
                height: "42px",
                paddingRight: "10px",
              }}
            />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mayelazar741@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              mayelazar741@gmail.com
            </a>
          </div>
        </div>
        <div className=" flex  p-4 flex-row justify-evenly md:hidden">
          <div className="flex ">
            <a
              href="https://github.com/MayElazar"
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                icon="fa-brands:github-square"
                style={{ color: "#F21D56", width: "auto", height: "42px" }}
              />
            </a>
          </div>
          <div>
            <a
              href="www.linkedin.com/in/may-elazar"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Icon
                icon="akar-icons:linkedin-fill"
                style={{ color: "#F21D56", width: "auto", height: "42px" }}
              />
            </a>
          </div>
          <div className="flex flex-row items-center">
            <a href="tel:+972543194777">
              <Icon
                icon="bx:bxs-phone"
                style={{
                  color: "#F21D56",
                  width: "auto",
                  height: "42px",
                }}
              />
            </a>
          </div>
          <div className="flex flex-row items-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mayelazar741@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <Icon
                icon="ic:round-email"
                style={{
                  color: "#F21D56",
                  width: "auto",
                  height: "42px",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contectme;
