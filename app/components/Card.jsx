"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import Model from "./Model";

const Card = ({id,photo,title,desc,link}) => {
  useEffect(()=>{

  },[title])
  return (
    <div>
      <div class="relative flex flex-col mt-6 text-gray-700 bg-gray-300 shadow-md bg-clip-border rounded-xl w-60">
        <div class="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src={photo}
            alt="card-image"
            loading="lazy"
            className="drop-shadow-xl"
          />
        </div>
        <div class="p-6">
          <h5 class="block mb-2 font-sans text-l antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
           {title}
          </h5>
          <p class="block font-sans text-base antialiased font-light  ">
            {desc.substring(0,55)+"..."}
           
          </p>
        </div>
       <div className="text-[0.8rem] pl-7 pb-7 ">

 
         <Model id={id} titl={title} des={desc} lin={link} phot={photo}></Model>
     
       </div>
      </div>
    </div>
  );
};

export default Card;
