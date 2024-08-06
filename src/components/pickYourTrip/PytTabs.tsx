import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Link from "next/link";

import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

type Props = {};

function PytTabs({}: Props) {
  return (
    <div>
      <Tabs className="pyt-tabs">
        <TabList className="pyt-tab-list">
          <Tab className="pyt-tab">Chill Adventure 1</Tab>
          <Tab className="pyt-tab">Spooky Tiems 2</Tab>
          <Tab className="pyt-tab">Desert Madness 3</Tab>
          <Tab className="pyt-tab">Out in the wild 4</Tab>
        </TabList>

        <TabPanel className="pyt-tab-panel">
          <div className="pyt-slideshow">img img img</div>
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
