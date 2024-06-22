"use client"
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars,faArrowAltCircleRight, } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; 
const Contact = () => {
  return (
    <div className='font-poppins flex flex-col gap-16  justify-center items-center'>
      <h1 className='text-[3rem] opacity-80'>Contact Me</h1>
      <div className='flex gap-3'>

      <Link href="mailto:chandankumarnetha@gmail.com" target="_blank">Mail : chandankumarnetha@gmail.com</Link>
      <FontAwesomeIcon
              icon={faArrowCircleUp}
              style={{ color: "gray" }}
              className='mt-1 rotate-45'
              ></FontAwesomeIcon>
              </div>
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
          <Link href="https://github.com/chandu123-123" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
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
        <p className='flex justify-center items-center pb-8 text-center'>&copy; Designed and Developed by Chandan Kumar Netha</p>
    </div>
  )
}

export default Contact
