import React from "react";
import AUGallery from "@/components/aboutUs/AUGallery";
import PeoplesThoughts from "@/components/aboutUs/peoplesThoughts/PeoplesThoughts";

type Props = {};

function AboutUs({}: Props) {
  const svgWave = (
    <svg
      width="1402"
      height="582"
      viewBox="0 0 1402 582"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svg-wave"
    >
      <path
        d="M1401 1H1V227.5V580C46 512 124 419.5 200 419.5C369 419.5 411.5 528.967 609 512C746 500.23 854 443.5 1016 184.5C1145.6 -22.7 1326.67 -0.166668 1401 37V1Z"
        fill="#011627"
        stroke="#011627"
      />
    </svg>
  );

  return (
    <div className="about-us-section">
      <div className="about-us">
        {svgWave}
        <AUGallery />
        <PeoplesThoughts />
      </div>
      <div className="c-u-soon">
        <h2 className="title">See You Soon!</h2>
        <p>We hope to meet each other very soon.</p>
      </div>
    </div>
  );
}

export default AboutUs;
