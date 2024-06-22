"use client";
import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingAnimation = () => (
  <Typewriter 
    options={{
      strings: ['Hey, I am Chandan', 'I Build Websites','Interested in Problem Solving','Working on shotstudy.com'],
      autoStart: true,
      loop: true,
      cursor: '_',
      delay: 50, // typing speed in milliseconds
      deleteSpeed: 50 // speed of deleting characters
    }}
    
  />
);

export default TypingAnimation;
