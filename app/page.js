import React from "react";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Card from "./components/Card";
import About from "./components/About";
import Image from "next/image";
import Model from "./components/Model";
import Typing from "./components/Typing";
import Contact from "./components/Contact";
import Link from "next/link";

const page = () => {
  return (
    <div className="scrollbar-none" >
      <div className="z-10 sticky top-0">
        <Navbar></Navbar>
      </div>
      <div className=" absolute top-0 -z-20 w-full h-full  flex justify-center ml-auto mr-auto ">
        <video
            src="/videos/back2.mp4"
            className="w-full h-full object-cover blur-sm opacity-15"
            autoPlay
            loop
            muted
          ></video>
        </div>
      <div className="px-10">
        
        <div
          className="flex flex-col gap-16  mt-16 md:mt-0 text-center md:text-start md:gap-0 md:flex-row  justify-center  items-center "
          id="home"
          style={{
            height: "calc(100vh - 7rem)", // Adjust this value to be the actual height of your navbar
          }}
        >
          <div className="flex justify-center flex-1 items-center">
            <Image
              src="/my.jpg"
              width={300}
              className="flex mt-10 md:mt-0 justify-center rounded-full drop-shadow-xl"
              height={100}
            ></Image>
          </div>
          <div className="flex-1 gap-10 items-center text-[1.4rem]  md:text-[3rem] font-poppins">
            <h1 className="text-[1.5rem] tracking-widest">Full Stack <span style={{ color: 'blue' }}>Developer</span></h1>
            <div className="mt-5 md:mt-0">

           <Typing></Typing>
            </div>
          </div>
        </div>
        <div className="mt-[6rem] block" id="about">
          <About></About>
        </div>

        <div
          className=" text-[10rem] flex flex-col justify-center items-center tracking-wider mt-28"
          id="skills"
        >
          <h1 className="font-poppins text-[3rem] opacity-75">Skills</h1>
          <Skill></Skill>
        </div>
        <div
          className=" flex flex-col justify-center items-center tracking-wider mt-20 gap-20 "
          id="projects"
        >
          <div className=" font-poppins text-[2rem] md:text-[3rem] font-semibold my-10 flex flex-wrap text-center opacity-75 justify-center items-center">
            <h1>

          Working on <span style={{ color: 'blue' }} className="font-poppins text-[2rem] md:text-[3rem] font-semibold"><Link href="https://shotstudy.com" target="_blank"> shotstudy.com</Link></span>
            </h1>
          </div>
          <h1 className="font-poppins text-[3rem] opacity-75">Projects</h1>
          <div className="overflow-x-auto max-w-full overflow-x-auto max-w-full scrollbar-none sm:scrollbar-thin sm:scrollbar-thumb-gray-600 sm:scrollbar-track-gray-100 ">
              <div className="flex gap-16 pb-10">
                <Card id={"my_model_1"} photo={"/fresher.png"} title={"Resume Builder"} desc={"website to create resume especially for fresheres with very easy steps, Built using Nextjs , redux and Razorpay payment Integration. Earned few Bucks through this site "} link={"https://www.fresheresume.com/"}/>
                <Card id={"my_model_2"} photo={"/netflix.png"} title={"Netflix Clone"} desc={"A clone of netflix where i learned complete frontend with this project in my initial days ."} link={"https://myflix-zeta.vercel.app/login"}/>
                <Card id={"my_model_3"} photo={"/auth.png"} title={"Crud Operations"} desc={"A complete auth based website with mongodb , involes every required operation for authentication "} link={"https://authentication-five-xi.vercel.app/"}/>
                <Card id={"my_model_4"} photo={"/blog.png"} title={"Blogging"} desc={"A blogging website with crud opertions for my content creation to navigate my instagram and youtube followers to this site for links"} link={"https://www.chandankumarnetha.in/blogs"}/>
                
                {/* Add more Card components as needed */}
              </div>
            </div>
        </div>
        <div className="py-5">
          <Contact></Contact>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
