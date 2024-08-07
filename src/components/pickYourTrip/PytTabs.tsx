import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Link from "next/link";

import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

type Props = {};

function PytTabs({}: Props) {
  const svgDots = (
    <svg
      width="230"
      height="230"
      viewBox="0 0 230 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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

  return (
    <div>
      <Tabs className="pyt-tabs">
        <TabList className="pyt-tab-list">
          <Tab className="pyt-tab">Chill Adventure</Tab>
          <Tab className="pyt-tab">Spooky Tiems</Tab>
          <Tab className="pyt-tab">Desert Madness</Tab>
          <Tab className="pyt-tab">Out in the wild</Tab>
        </TabList>

        <TabPanel className="pyt-tab-panel">
          <div className="pyt-slideshow">img img img {svgDots}</div>
          <div className="pyt-tab-panel-content">
            <h3 className="title">Chill Adventure</h3>
            <p className="text">
              Ornare vivamus molestie pellentesque nunc. Sed sapien erat
              ultrices curabitur. Erat id fringilla arcu condimentum fames.
            </p>
            <p className="extra">
              Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum
              rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra
              lacus, dignissim pharetra ipsum blandit. Feugiat quis quam
              consectetur lectus id quis tortor vel, mattis.
            </p>

            <Link href="#">SEE OUR LATEST OFFER</Link>
          </div>
          <div className="links">
            <span>share it:</span>
            <ul>
              <li>
                <Link href="">
                  <FiTwitter />
                </Link>
              </li>
              <li>
                <Link href="">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="">
                  <FaFacebookF />
                </Link>
              </li>
            </ul>
          </div>
        </TabPanel>

        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default PytTabs;
