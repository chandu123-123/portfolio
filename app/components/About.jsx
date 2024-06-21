import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-16 text-center md:text-start md:gap-0 md:flex-row justify-center items-center">
      <div className="flex flex-1  justify-center">
        <Image
          src="/Designer.jpeg"
          className="rounded-lg"
          width={300}
          height={200}
        ></Image>
      </div>
      <div className="flex-1 mr-10">
        <h1 className="font-poppins tracking-widest text-[1rem] mb-5">ABOUT</h1>
        <div>
          <p>
            I&apos;m Chandan, currently pursuing my degree at CVR College with a
            notable CGPA of 9.1. As an IndieHacker, I specialize in developing
            websites and assisting others in creating impactful online
            solutions. My preferred tech stack includes the<span style={{ color: 'blue' }}> MERN stack</span>  (MongoDB,
            Express.js, React, Node.js) with<span style={{ color: 'blue' }}> Next Js </span>for building advanced
            React-based applications.
          </p>

          <p>
            I&apos;m passionate about tackling coding challenges, having solved
            over <span style={{ color: 'blue' }}> 250+ Problems.</span> on LeetCode using Java. Beyond coding, I&apos;m
            actively involved in content creation on <span style={{ color: 'blue' }}> Instagram</span>, where I share
            insights with a community of{" "}
            <span class="highlight">50,000 followers</span>, and on <span style={{ color: 'blue' }}> Youtube</span>,
            where my channel reaches{" "}
            <span class="highlight">28,000 subscribers</span>. My content covers
            topics ranging from AI to B.Tech studies, projects, and career
            placements.
          </p>

          <p>
            I enjoy exploring new technologies and leveraging my skills to
            contribute meaningfully to the tech community. Feel free to reach
            out to discuss collaborations, projects, or anything tech-related!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
