import React from 'react';
import "./Type.scss";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter 
          options={{
            strings: [
              "Frontend Developer",
              "2222222222222222222222222",
              "3333333333333333333333333",
              "4444444444444444444444444"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
    );
};

export default Type;