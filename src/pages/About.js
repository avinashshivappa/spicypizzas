import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Occaecat sunt deserunt nisi sit et sint laboris excepteur sunt. Do
          pariatur do cillum minim quis id tempor et nulla laborum aliqua
          incididunt sint et. Amet commodo commodo ad esse ad dolor irure in ad
          anim exercitation. Occaecat cillum et officia voluptate tempor
          exercitation duis aliquip magna sint occaecat. Sit aute Lorem ut
          deserunt. Sit mollit pariatur irure laborum ipsum proident Lorem
          consequat quis ad veniam cillum adipisicing. Est ipsum adipisicing
          veniam cupidatat velit deserunt.
        </p>
      </div>
    </div>
  );
}

export default About;
