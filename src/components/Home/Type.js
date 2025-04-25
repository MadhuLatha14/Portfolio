import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DSA Enthusiast",
          "MERN Stack Developer",
          "Machine Learning Enthusiast",
          "Data Science Aspirant",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
