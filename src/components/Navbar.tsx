"use client";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { FaChevronDown,FaChevronUp } from "react-icons/fa";

type Props = {};

function Navbar({}: Props) {
  const [darkModeNavbar, setDarkModeNavbar] = useState(false);
  const handleScroll = () => {
    const position = window.scrollY || window.pageYOffset;
    setDarkModeNavbar(position > 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [windowSize, setWindowSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const [toggleSearch,setToggleSearch ] = useState(false);
  const toggleSearchHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if(!toggleSearch){
      const searchInput = document.getElementById("search-input") as HTMLInputElement;
      searchInput.focus();
      searchInput.select();
    }
    setToggleSearch(!toggleSearch);
  };
  
  const [toggleMenu,setToggleMenu ] = useState(false);
  const toggleMenuHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={`navbar  ${darkModeNavbar ? "scrolled" : "not-scrolled"}`}>
      <div className={`nav-container`}>
        <Link href={"/"} className="nav-logo">
          NT<span>.</span>
        </Link>

        <div className={`nav-search ${toggleSearch? "show":"hide"}`}>
          <div className="nav-search-container">

            <button onClick={toggleSearchHandler}>
              <FiSearch className={!toggleSearch?"scale-x-0-100":"-scale-x-100"} />
            </button>
          <form action="" autoComplete="off">
            <input required type="text" name="q" id="search-input" autoComplete="off" />
          </form>
          </div>
        </div>

        <div className="nav-links">
          <button className="nav-links-item nav-menu-btn" onClick={toggleMenuHandler}>
            {windowSize[0]>=768? "menu":
            toggleMenu?<FaChevronUp />:<FaChevronDown />}
          </button>
              <ul  className={`nav-menu-items ${toggleMenu? "show":"hide"}`}>
                <li className="nav-menu-item">
                  <Link href={""}>Welcome</Link>
                </li>
                <li className="nav-menu-item">
                  <Link href={""}>about us</Link>
                </li>
                <li className="nav-menu-item">
                  <Link href={""}>contact us</Link>
                </li>
                <li className="nav-menu-item">
                  <Link href={""}>bye bye</Link>
                </li>
              </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
