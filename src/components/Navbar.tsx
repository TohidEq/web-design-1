"use client";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";

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
  
  const toggleSearch = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {};
  
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

        <div className="nav-search">
          <form action="" autoComplete="off">
            <button onClick={toggleSearch}>
              <FiSearch />
            </button>
            <input type="text" name="q" id="search-input" autoComplete="off" />
          </form>
        </div>

        <div className="nav-links">
          <button className="nav-links-item" onClick={toggleMenuHandler}>
            menu
          </button>
            <div className={`nav-menu ${toggleMenu? "show":"hide"}`}>
              <ul  className="nav-menu-items">
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
    </div>
  );
}

export default Navbar;
