"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars ,faTimes} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Import icons from brands library
import Link from "next/link";

const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <div>
      <div className=" py-5 px-10 bg-opacity-50 inset-0 backdrop-blur-md font-poppins bg-gray-400 flex justify-between">
        <div className="flex gap-3">
          <Link href="https://x.com/chandan_netha" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "gray" }}
            ></FontAwesomeIcon>
          </Link>
          <Link href="https://www.linkedin.com/in/chandan-kumar-78738a253/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "gray" }}
            ></FontAwesomeIcon>
          </Link>
          <Link
            href="https://www.instagram.com/chandan_cheripally_/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "gray" }}
            ></FontAwesomeIcon>
          </Link>
          <Link
            href="https://www.youtube.com/@chandankumarnetha"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ color: "gray" }}
            ></FontAwesomeIcon>
          </Link>
          <Link href="mailto:chandankumarnetha@gmail.com" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "gray" }}
            ></FontAwesomeIcon>
          </Link>
        </div>
        <div className="sm:visible hidden sm:list-none sm:flex sm:gap-3">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </div>
        <div className="visible sm:hidden">
          {!open && (
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "gray" }}
              onClick={() => {
                setopen(true);
              }}
            ></FontAwesomeIcon>
          )}
        </div>
        {open && (
          
          <div className="absolute  w-screen h-screen list-none center text-center  flex flex-col  justify-center items-center  opacity-95 inset-0 backdrop-blur-md font-poppins bg-white">
          
            <div>
              <li className="p-1">
                <a href="#home" onClick={()=>{setopen(false)}} >Home</a>
              </li >
              <li className="p-1">
                <a href="#about" onClick={()=>{setopen(false)}}>About</a>
              </li>
              <li className="p-1">
                <a href="#projects" onClick={()=>{setopen(false)}}>Projects</a>
              </li>
              <li className="p-1">
                <a href="#skills" onClick={()=>{setopen(false)}}>Skills</a>
              </li>
            </div>
          </div>
        )}
        {
          open && (
            <div className="z-30 hover:scale-150 " onClick={()=>{setopen(false)}}>
                 <FontAwesomeIcon
              icon={faTimes}
              style={{ color: "gray" }}
            ></FontAwesomeIcon>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
