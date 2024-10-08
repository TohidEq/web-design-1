import React from "react";

import { Fade } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
type Props = {
  items: { title: String; image: string }[];
};

function PytSlideshow({ items }: Props) {
  const svgDots = (
    <svg
      width="230"
      height="230"
      viewBox="0 0 230 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svg-dots"
    >
      <circle cx="5" cy="125" r="5" fill="#41EAD4" />
      <circle cx="25" cy="125" r="5" fill="#41EAD4" />
      <circle cx="45" cy="125" r="5" fill="#41EAD4" />
      <circle cx="65" cy="125" r="5" fill="#41EAD4" />
      <circle cx="85" cy="125" r="5" fill="#41EAD4" />
      <circle cx="105" cy="125" r="5" fill="#41EAD4" />
      <circle cx="5" cy="145" r="5" fill="#41EAD4" />
      <circle cx="25" cy="145" r="5" fill="#41EAD4" />
      <circle cx="45" cy="145" r="5" fill="#41EAD4" />
      <circle cx="65" cy="145" r="5" fill="#41EAD4" />
      <circle cx="85" cy="145" r="5" fill="#41EAD4" />
      <circle cx="105" cy="145" r="5" fill="#41EAD4" />
      <circle cx="5" cy="165" r="5" fill="#41EAD4" />
      <circle cx="25" cy="165" r="5" fill="#41EAD4" />
      <circle cx="45" cy="165" r="5" fill="#41EAD4" />
      <circle cx="65" cy="165" r="5" fill="#41EAD4" />
      <circle cx="85" cy="165" r="5" fill="#41EAD4" />
      <circle cx="105" cy="165" r="5" fill="#41EAD4" />
      <circle cx="5" cy="185" r="5" fill="#41EAD4" />
      <circle cx="25" cy="185" r="5" fill="#41EAD4" />
      <circle cx="45" cy="185" r="5" fill="#41EAD4" />
      <circle cx="65" cy="185" r="5" fill="#41EAD4" />
      <circle cx="85" cy="185" r="5" fill="#41EAD4" />
      <circle cx="105" cy="185" r="5" fill="#41EAD4" />
      <circle cx="5" cy="205" r="5" fill="#41EAD4" />
      <circle cx="25" cy="205" r="5" fill="#41EAD4" />
      <circle cx="45" cy="205" r="5" fill="#41EAD4" />
      <circle cx="65" cy="205" r="5" fill="#41EAD4" />
      <circle cx="85" cy="205" r="5" fill="#41EAD4" />
      <circle cx="105" cy="205" r="5" fill="#41EAD4" />
      <circle cx="5" cy="225" r="5" fill="#41EAD4" />
      <circle cx="25" cy="225" r="5" fill="#41EAD4" />
      <circle cx="45" cy="225" r="5" fill="#41EAD4" />
      <circle cx="65" cy="225" r="5" fill="#41EAD4" />
      <circle cx="85" cy="225" r="5" fill="#41EAD4" />
      <circle cx="105" cy="225" r="5" fill="#41EAD4" />
      <circle cx="125" cy="5" r="5" fill="#41EAD4" />
      <circle cx="145" cy="5" r="5" fill="#41EAD4" />
      <circle cx="165" cy="5" r="5" fill="#41EAD4" />
      <circle cx="185" cy="5" r="5" fill="#41EAD4" />
      <circle cx="205" cy="5" r="5" fill="#41EAD4" />
      <circle cx="225" cy="5" r="5" fill="#41EAD4" />
      <circle cx="125" cy="25" r="5" fill="#41EAD4" />
      <circle cx="145" cy="25" r="5" fill="#41EAD4" />
      <circle cx="165" cy="25" r="5" fill="#41EAD4" />
      <circle cx="185" cy="25" r="5" fill="#41EAD4" />
      <circle cx="205" cy="25" r="5" fill="#41EAD4" />
      <circle cx="225" cy="25" r="5" fill="#41EAD4" />
      <circle cx="125" cy="45" r="5" fill="#41EAD4" />
      <circle cx="145" cy="45" r="5" fill="#41EAD4" />
      <circle cx="165" cy="45" r="5" fill="#41EAD4" />
      <circle cx="185" cy="45" r="5" fill="#41EAD4" />
      <circle cx="205" cy="45" r="5" fill="#41EAD4" />
      <circle cx="225" cy="45" r="5" fill="#41EAD4" />
      <circle cx="125" cy="65" r="5" fill="#41EAD4" />
      <circle cx="145" cy="65" r="5" fill="#41EAD4" />
      <circle cx="165" cy="65" r="5" fill="#41EAD4" />
      <circle cx="185" cy="65" r="5" fill="#41EAD4" />
      <circle cx="205" cy="65" r="5" fill="#41EAD4" />
      <circle cx="225" cy="65" r="5" fill="#41EAD4" />
      <circle cx="125" cy="85" r="5" fill="#41EAD4" />
      <circle cx="145" cy="85" r="5" fill="#41EAD4" />
      <circle cx="165" cy="85" r="5" fill="#41EAD4" />
      <circle cx="185" cy="85" r="5" fill="#41EAD4" />
      <circle cx="205" cy="85" r="5" fill="#41EAD4" />
      <circle cx="225" cy="85" r="5" fill="#41EAD4" />
      <circle cx="125" cy="105" r="5" fill="#41EAD4" />
      <circle cx="145" cy="105" r="5" fill="#41EAD4" />
      <circle cx="165" cy="105" r="5" fill="#41EAD4" />
      <circle cx="185" cy="105" r="5" fill="#41EAD4" />
      <circle cx="205" cy="105" r="5" fill="#41EAD4" />
      <circle cx="225" cy="105" r="5" fill="#41EAD4" />
      <circle cx="5" cy="5" r="5" fill="#41EAD4" />
      <circle cx="25" cy="5" r="5" fill="#41EAD4" />
      <circle cx="45" cy="5" r="5" fill="#41EAD4" />
      <circle cx="65" cy="5" r="5" fill="#41EAD4" />
      <circle cx="85" cy="5" r="5" fill="#41EAD4" />
      <circle cx="105" cy="5" r="5" fill="#41EAD4" />
      <circle cx="5" cy="25" r="5" fill="#41EAD4" />
      <circle cx="25" cy="25" r="5" fill="#41EAD4" />
      <circle cx="45" cy="25" r="5" fill="#41EAD4" />
      <circle cx="65" cy="25" r="5" fill="#41EAD4" />
      <circle cx="85" cy="25" r="5" fill="#41EAD4" />
      <circle cx="105" cy="25" r="5" fill="#41EAD4" />
      <circle cx="5" cy="45" r="5" fill="#41EAD4" />
      <circle cx="25" cy="45" r="5" fill="#41EAD4" />
      <circle cx="45" cy="45" r="5" fill="#41EAD4" />
      <circle cx="65" cy="45" r="5" fill="#41EAD4" />
      <circle cx="85" cy="45" r="5" fill="#41EAD4" />
      <circle cx="105" cy="45" r="5" fill="#41EAD4" />
      <circle cx="5" cy="65" r="5" fill="#41EAD4" />
      <circle cx="25" cy="65" r="5" fill="#41EAD4" />
      <circle cx="45" cy="65" r="5" fill="#41EAD4" />
      <circle cx="65" cy="65" r="5" fill="#41EAD4" />
      <circle cx="85" cy="65" r="5" fill="#41EAD4" />
      <circle cx="105" cy="65" r="5" fill="#41EAD4" />
      <circle cx="5" cy="85" r="5" fill="#41EAD4" />
      <circle cx="25" cy="85" r="5" fill="#41EAD4" />
      <circle cx="45" cy="85" r="5" fill="#41EAD4" />
      <circle cx="65" cy="85" r="5" fill="#41EAD4" />
      <circle cx="85" cy="85" r="5" fill="#41EAD4" />
      <circle cx="105" cy="85" r="5" fill="#41EAD4" />
      <circle cx="5" cy="105" r="5" fill="#41EAD4" />
      <circle cx="25" cy="105" r="5" fill="#41EAD4" />
      <circle cx="45" cy="105" r="5" fill="#41EAD4" />
      <circle cx="65" cy="105" r="5" fill="#41EAD4" />
      <circle cx="85" cy="105" r="5" fill="#41EAD4" />
      <circle cx="105" cy="105" r="5" fill="#41EAD4" />
      <circle cx="125" cy="125" r="5" fill="#41EAD4" />
      <circle cx="145" cy="125" r="5" fill="#41EAD4" />
      <circle cx="165" cy="125" r="5" fill="#41EAD4" />
      <circle cx="185" cy="125" r="5" fill="#41EAD4" />
      <circle cx="205" cy="125" r="5" fill="#41EAD4" />
      <circle cx="225" cy="125" r="5" fill="#41EAD4" />
      <circle cx="125" cy="145" r="5" fill="#41EAD4" />
      <circle cx="145" cy="145" r="5" fill="#41EAD4" />
      <circle cx="165" cy="145" r="5" fill="#41EAD4" />
      <circle cx="185" cy="145" r="5" fill="#41EAD4" />
      <circle cx="205" cy="145" r="5" fill="#41EAD4" />
      <circle cx="225" cy="145" r="5" fill="#41EAD4" />
      <circle cx="125" cy="165" r="5" fill="#41EAD4" />
      <circle cx="145" cy="165" r="5" fill="#41EAD4" />
      <circle cx="165" cy="165" r="5" fill="#41EAD4" />
      <circle cx="185" cy="165" r="5" fill="#41EAD4" />
      <circle cx="205" cy="165" r="5" fill="#41EAD4" />
      <circle cx="225" cy="165" r="5" fill="#41EAD4" />
      <circle cx="125" cy="185" r="5" fill="#41EAD4" />
      <circle cx="145" cy="185" r="5" fill="#41EAD4" />
      <circle cx="165" cy="185" r="5" fill="#41EAD4" />
      <circle cx="185" cy="185" r="5" fill="#41EAD4" />
      <circle cx="205" cy="185" r="5" fill="#41EAD4" />
      <circle cx="225" cy="185" r="5" fill="#41EAD4" />
      <circle cx="125" cy="205" r="5" fill="#41EAD4" />
      <circle cx="145" cy="205" r="5" fill="#41EAD4" />
      <circle cx="165" cy="205" r="5" fill="#41EAD4" />
      <circle cx="185" cy="205" r="5" fill="#41EAD4" />
      <circle cx="205" cy="205" r="5" fill="#41EAD4" />
      <circle cx="225" cy="205" r="5" fill="#41EAD4" />
      <circle cx="125" cy="225" r="5" fill="#41EAD4" />
      <circle cx="145" cy="225" r="5" fill="#41EAD4" />
      <circle cx="165" cy="225" r="5" fill="#41EAD4" />
      <circle cx="185" cy="225" r="5" fill="#41EAD4" />
      <circle cx="205" cy="225" r="5" fill="#41EAD4" />
      <circle cx="225" cy="225" r="5" fill="#41EAD4" />
    </svg>
  );

  const properties = {
    prevArrow: (
      <button className="btn btn-left">
        <FaArrowLeft />
      </button>
    ),
    nextArrow: (
      <button className="btn btn-right">
        <FaArrowRight />
      </button>
    ),
  };

  return (
    <div className="relative">
      <Fade {...properties}>
        {items.map((item, index) => (
          <div className="each-slide-effect" key={index}>
            <div
              className={`slide-image`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="title">
                {item.title}
                <span className="counter">0{index + 1}.</span>
              </div>
            </div>
          </div>
        ))}
      </Fade>
      {svgDots}
    </div>
  );
}

export default PytSlideshow;
