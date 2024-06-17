"use client"
import React, { useEffect, useState } from 'react';
import Typewriter from "react-typewriter-effect";

const Typing = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className='font-poppins'>
      {isClient && (
        <Typewriter
          startDelay={100}
          cursorColor="black"
          multiText={[
            "Hey, Chandan here.",
            "I Build websites. ",
            "And it's really cool!"
          ]}
          typeSpeed={100}
          multiTextDelay={1000}
          multiTextLoop={true}
        />
      )}
    </div>
  );
};

export default Typing;