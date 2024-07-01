import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "../styles/custom.css";

const Header = () => {
  const [navIsVisible, setNavIsVisible, dropdownOpen, setDropdownOpen] =
    useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };
  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-[#ffffff] ">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img
            className="md:w-16 lg:w-28 xsm:w-14 xxsm:w-14"
            src={images.Logo}
            alt="logo"
          />
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              onClick={navVisibilityHandler}
              className="text-2xl lg:hidden cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              onClick={navVisibilityHandler}
              className="text-2xl lg:hidden cursor-pointer"
            />
          )}
        </div>
        <div
          className={` menbg ${navIsVisible ? "right-0" : "-right-full"}
            transition-all duration-300 mt-[56px] lg:mt-0  lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-12">
            <li className=" relative group">
              <a
                href="/"
                className=" nabtn text-4xl lg:text-lg transition-all duration-500 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="nabtn text-4xl lg:text-lg transition-all  duration-500 "
              >
                Projects
              </a>
            </li>
            <Dropdown>
              <DropdownTrigger>
                <li style={{ cursor: "pointer" }}>
                  <a className=" nabtn text-4xl lg:text-xl transition-all  duration-500 lg:flex lg:items-center gap-2">
                    Pages{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="lg:text-xs"
                    />
                  </a>
                </li>
              </DropdownTrigger>

              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="About us" href="/about">
                  About us
                </DropdownItem>
                <DropdownItem key="Contact us" href="/contact">
                  Contact us
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <li>
              <a
                href="/"
                className=" nabtn text-4xl lg:text-xl transition-all duration-500 "
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" nabtn text-4xl lg:text-xl transition-all duration-500 "
              >
                Faq
              </a>
            </li>
          </ul>
          <NavLink to ='/signin'>
          <button className=" mt-4 lg:mt-0 relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-base font-medium text-white backdrop-blur-3xl">
              Sign in
            </span>
          </button>
          </NavLink>
        </div>
      </header>
    </section>
  );
};

export default Header;
