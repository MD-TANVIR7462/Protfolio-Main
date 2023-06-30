import React from "react";
import Typewriter from "typewriter-effect";

const Types = () => {
    return (
        <Typewriter
        
          options={{
            strings: [
              "Welcome to my portfolio!",
              "I'm a MERN stack developer",
              "With a strong foundation in JavaScript",
              "Thank For Visite"
              
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Types