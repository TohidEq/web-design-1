import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import Link from "next/link";

import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import PytSlideshow from "./PytSlideshow";

type Props = {};

function PytTabs({}: Props) {
  const slideshowItems: SlideshowItem[] = [
    {
      title: "GRAND DUNES LANDSCAPE 1",
      image: "/images/pick-your-trip/pick-your-trip.jpg",
    },
    {
      title: "GRAND DUNES LANDSCAPE 2",
      image: "/images/pick-your-trip/pick-your-trip-1.jpg",
    },
  ];
  const slideshowItems2: SlideshowItem[] = [
    {
      title: "NEW DUNES LANDSCAPE 1",
      image: "/images/pick-your-trip/pick-your-trip-2.jpg",
    },
    {
      title: "NEW DUNES LANDSCAPE 2",
      image: "/images/pick-your-trip/pick-your-trip-3.jpg",
    },
  ];

  return (
    <Tabs className="pyt-tabs">
      <TabList className="pyt-tab-list">
        <Tab className="pyt-tab">Chill Adventure</Tab>
        <Tab className="pyt-tab">Spooky Tiems</Tab>
        <Tab className="pyt-tab">Desert Madness</Tab>
        <Tab className="pyt-tab">Out in the wild</Tab>
      </TabList>

      <TabPanel className="pyt-tab-panel">
        <div className="pyt-slideshow">
          <PytSlideshow items={slideshowItems} />
        </div>
        <div className="pyt-tab-panel-content">
          <h3 className="title">Chill Adventure</h3>
          <p className="text">
            Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices
            curabitur. Erat id fringilla arcu condimentum fames.
          </p>
          <p className="extra">
            Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum
            rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra
            lacus, dignissim pharetra ipsum blandit. Feugiat quis quam
            consectetur lectus id quis tortor vel, mattis.
          </p>
          <Link className="link" href="#">
            SEE OUR LATEST OFFER
          </Link>
          <div className="links">
            <ul>
              <span>share it:</span>
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
        </div>
      </TabPanel>

      <TabPanel className="pyt-tab-panel">
        <div className="pyt-slideshow">
          <PytSlideshow items={slideshowItems2} />
        </div>
        <div className="pyt-tab-panel-content">
          <h3 className="title">Spooky Tiems</h3>
          <p className="text">
            Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices
            curabitur. Erat id fringilla arcu condimentum fames.
          </p>
          <p className="extra">
            Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum
            rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra
            lacus, dignissim pharetra ipsum blandit. Feugiat quis quam
            consectetur lectus id quis tortor vel, mattis.
          </p>
          <Link className="link" href="#">
            SEE OUR LATEST OFFER
          </Link>
          <div className="links">
            <ul>
              <span>share it:</span>
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
        </div>
      </TabPanel>

      <TabPanel className="pyt-tab-panel">
        <div className="pyt-slideshow">
          <PytSlideshow items={slideshowItems} />
        </div>
        <div className="pyt-tab-panel-content">
          <h3 className="title">Desert Madness</h3>
          <p className="text">
            Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices
            curabitur. Erat id fringilla arcu condimentum fames.
          </p>
          <p className="extra">
            Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum
            rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra
            lacus, dignissim pharetra ipsum blandit. Feugiat quis quam
            consectetur lectus id quis tortor vel, mattis.
          </p>
          <Link className="link" href="#">
            SEE OUR LATEST OFFER
          </Link>
          <div className="links">
            <ul>
              <span>share it:</span>
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
        </div>
      </TabPanel>

      <TabPanel className="pyt-tab-panel">
        <div className="pyt-slideshow">
          <PytSlideshow items={slideshowItems2} />
        </div>
        <div className="pyt-tab-panel-content">
          <h3 className="title">Out in the wild</h3>
          <p className="text">
            Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices
            curabitur. Erat id fringilla arcu condimentum fames.
          </p>
          <p className="extra">
            Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum
            rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra
            lacus, dignissim pharetra ipsum blandit. Feugiat quis quam
            consectetur lectus id quis tortor vel, mattis.
          </p>
          <Link className="link" href="#">
            SEE OUR LATEST OFFER
          </Link>
          <div className="links">
            <ul>
              <span>share it:</span>
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
        </div>
      </TabPanel>
    </Tabs>
  );
}

export default PytTabs;
