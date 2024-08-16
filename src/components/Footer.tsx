import React from "react";

import Link from "next/link";

import { CgShapeRhombus } from "react-icons/cg";

import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="links">
          <h2 className="links-title">
            about
            <CgShapeRhombus className="svg-title" />
          </h2>
          <ul>
            <li className="link">
              <Link href="#">Our Mission</Link>
            </li>
            <li className="link">
              <Link href="#">Terms</Link>
            </li>
            <li className="link">
              <Link href="#">Copyrights</Link>
            </li>
          </ul>
        </div>
        <div className="links">
          <h2 className="links-title">
            faq
            <CgShapeRhombus className="svg-title" />
          </h2>
          <ul>
            <li className="link">
              <Link href="#">Rules</Link>
            </li>
            <li className="link">
              <Link href="#">Tickets</Link>
            </li>
            <li className="link">
              <Link href="#">Editions</Link>
            </li>
            <li className="link">
              <Link href="#">Contribute</Link>
            </li>
          </ul>
        </div>
        <div className="links">
          <h2 className="links-title">
            events
            <CgShapeRhombus className="svg-title" />
          </h2>
          <ul>
            <li className="link">
              <Link href="#">Star Gazing</Link>
            </li>
            <li className="link">
              <Link href="#">Desert Mania</Link>
            </li>
            <li className="link">
              <Link href="#">Dunes Madness</Link>
            </li>
            <li className="link">
              <Link href="#">Spooky Land</Link>
            </li>
          </ul>
        </div>
        <div className="links">
          <h2 className="links-title">
            contant us
            <CgShapeRhombus className="svg-title" />
          </h2>
          <ul>
            <li className="link">
              <Link href="#">hello@example.com</Link>
            </li>
            <li className="link">
              <Link href="#">(405) 555-0128</Link>
            </li>
            <li className="link">
              <Link href="#">(252) 555-0126</Link>
            </li>
          </ul>
        </div>
        <div className="links">
          <h2 className="links-title">
            follow us
            <CgShapeRhombus className="svg-title" />
          </h2>
          <ul className="icons-links">
            <li className="link">
              <Link href="#">
                <FaInstagram />
              </Link>
            </li>
            <li className="link">
              <Link href="#">
                <FaFacebookF />
              </Link>
            </li>
            <li className="link">
              <Link href="#">
                <FiTwitter />
              </Link>
            </li>
            <li className="link">
              <Link href="#"></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-texts">
        <p className="copyright">
          Copyright © Night Trips 2019. All rights reserved.
        </p>

        <div className="logo">
          NT<span>.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
