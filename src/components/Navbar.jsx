import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { github } from "../assets";
import { linkedin } from "../assets";
import { twitter } from "../assets";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-6 h-6 object-contain" />
          <p className="text-white text-[15px] font-bold cursor-pointer flex ">
            Shivam &nbsp;
            <span className="sm:block hidden"> | Software Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-5">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[15px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[25px] h-[25px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="fixed right-3 top-1/2 transform -translate-y-1/2 z-50 bg-gradient-to-b from-purple-700 to-pink-400 py-5 px-1.5 rounded-full">
        <div className="flex flex-col space-y-4">
          <a href="https://github.com/ShivamChikara1611" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
            <img src={github} alt="GitHub" className="w-6 h-6 filter invert" />
          </a>

          <a href="https://www.linkedin.com/in/shivam-chikara1611/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>

          <a href="https://x.com/ShivamC1611?prefetchTimestamp=1725389011164" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
            <img src={twitter} alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
