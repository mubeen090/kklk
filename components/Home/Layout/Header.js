import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../../misc/ButtonOutline.";
import LogoSkillGarage from "../../../public/assets/Logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-2 md:px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <Link href="/">
            <div className="col-start-1 col-end-2 flex items-center">
              <LogoSkillGarage className="h-3 md:h-6 w-auto" />
            </div>
          </Link>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <LinkScroll
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("hero");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "hero"
                  ? " text-purple-600 animation-active "
                  : " text-black-500 hover:text-purple-600 a")
              }
            >
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "services"
                  ? " text-purple-600 animation-active "
                  : " text-black-500 hover:text-purple-600 ")
              }
            >
              Services
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="courses"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("courses");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "courses"
                  ? " text-purple-600 animation-active "
                  : " text-black-500 hover:text-purple-600 ")
              }
            >
              Programs
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="tutors"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("tutors");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "tutors"
                  ? " text-purple-600 animation-active "
                  : " text-black-500 hover:text-purple-600 ")
              }
            >
              Tutors
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimonials");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimonials"
                  ? " text-purple-600 animation-active "
                  : " text-black-500 hover:text-purple-600 ")
              }
            >
              Testimonials
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-purple-600 transition-all">
                  Sign In
              </a>
            </Link>
            <ButtonOutline>Signup</ButtonOutline>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("hero");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "hero"
                  ? "  border-purple-600 text-purple-600"
                  : " border-transparent")
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6682 7.43438L8.84891 0.618616L8.39182 0.161526C8.28768 0.0580659 8.14683 0 8.00003 0C7.85323 0 7.71239 0.0580659 7.60824 0.161526L0.331861 7.43438C0.225143 7.54068 0.140803 7.66728 0.0838179 7.80671C0.0268328 7.94614 -0.0016424 8.09558 7.31515e-05 8.2462C0.00713246 8.86741 0.524227 9.36333 1.14545 9.36333H1.8955V15.1114H14.1046V9.36333H14.8705C15.1723 9.36333 15.4564 9.24509 15.67 9.03154C15.7751 8.92673 15.8584 8.8021 15.9151 8.66488C15.9717 8.52764 16.0006 8.38054 16 8.23208C16 7.93206 15.8817 7.64792 15.6682 7.43438ZM8.98833 13.8407H7.01173V10.2404H8.98833V13.8407ZM12.8339 8.09266V13.8407H10.1178V9.81689C10.1178 9.42686 9.80192 9.11096 9.41189 9.11096H6.58817C6.19814 9.11096 5.88224 9.42686 5.88224 9.81689V13.8407H3.16617V8.09266H1.47194L8.0018 1.56809L8.40947 1.97577L14.5299 8.09266H12.8339Z"
                  fill="#CCCCCC"
                />
              </svg>
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "services"
                  ? "  border-purple-600 text-purple-600"
                  : " border-transparent ")
              }
            >
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10.6667V4C0 3.63333 0.130667 3.31933 0.392 3.058C0.653333 2.79667 0.967111 2.66622 1.33333 2.66667H3.33333V1.33333C3.33333 0.966668 3.464 0.652668 3.72533 0.391334C3.98667 0.130001 4.30044 -0.000443313 4.66667 1.13186e-06H8.66667C9.03333 1.13186e-06 9.34733 0.130668 9.60867 0.392001C9.87 0.653334 10.0004 0.967112 10 1.33333V2.66667H12C12.3667 2.66667 12.6807 2.79733 12.942 3.05867C13.2033 3.32 13.3338 3.63378 13.3333 4V10.6667H0ZM4 7.33333V8H2.66667V7.33333H1.33333V9.33333H12V7.33333H10.6667V8H9.33333V7.33333H4ZM1.33333 4V6H2.66667V5.33333H4V6H9.33333V5.33333H10.6667V6H12V4H1.33333ZM4.66667 2.66667H8.66667V1.33333H4.66667V2.66667Z"
                  fill="#CCCCCC"
                />
              </svg>
              Services
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="courses"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("courses");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "courses"
                  ? "  border-purple-600 text-purple-600"
                  : " border-transparent ")
              }
            >
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.085 7.5L7.79 8.795L8.5 9.5L10.5 7.5L8.5 5.5L7.79 6.205L9.085 7.5ZM4.915 7.5L6.21 6.205L5.5 5.5L3.5 7.5L5.5 9.5L6.21 8.795L4.915 7.5Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M3.5 2.5C3.77614 2.5 4 2.27614 4 2C4 1.72386 3.77614 1.5 3.5 1.5C3.22386 1.5 3 1.72386 3 2C3 2.27614 3.22386 2.5 3.5 2.5Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M2 2.5C2.27614 2.5 2.5 2.27614 2.5 2C2.5 1.72386 2.27614 1.5 2 1.5C1.72386 1.5 1.5 1.72386 1.5 2C1.5 2.27614 1.72386 2.5 2 2.5Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M13 0H1C0.4485 0 0 0.4485 0 1V11C0 11.5515 0.4485 12 1 12H13C13.5515 12 14 11.5515 14 11V1C14 0.4485 13.5515 0 13 0ZM13 1V3H1V1H13ZM1 11V4H13V11H1Z"
                  fill="#CCCCCC"
                />
              </svg>
              Programs
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="tutors"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("tutors");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "tutors"
                  ? "  border-purple-600 text-purple-600"
                  : " border-transparent ")
              }
            >
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7692 0H1.23077C0.904349 0 0.591298 0.12967 0.360484 0.360484C0.12967 0.591298 0 0.904349 0 1.23077V12.3077C0 12.6341 0.12967 12.9472 0.360484 13.178C0.591298 13.4088 0.904349 13.5385 1.23077 13.5385H2.26077C2.37724 13.5385 2.49132 13.5055 2.58977 13.4433C2.68822 13.381 2.76699 13.2921 2.81692 13.1869C3.11617 12.5551 3.58862 12.0213 4.17934 11.6474C4.77006 11.2736 5.45477 11.0751 6.15385 11.0751C6.85292 11.0751 7.53763 11.2736 8.12835 11.6474C8.71907 12.0213 9.19152 12.5551 9.49077 13.1869C9.5407 13.2921 9.61947 13.381 9.71792 13.4433C9.81637 13.5055 9.93046 13.5385 10.0469 13.5385H14.7692C15.0957 13.5385 15.4087 13.4088 15.6395 13.178C15.8703 12.9472 16 12.6341 16 12.3077V1.23077C16 0.904349 15.8703 0.591298 15.6395 0.360484C15.4087 0.12967 15.0957 0 14.7692 0ZM4.30769 8C4.30769 7.63487 4.41597 7.27793 4.61883 6.97433C4.82168 6.67073 5.11001 6.43411 5.44735 6.29438C5.78469 6.15465 6.15589 6.11809 6.51401 6.18932C6.87213 6.26055 7.20109 6.43638 7.45927 6.69457C7.71746 6.95276 7.89329 7.28171 7.96453 7.63983C8.03576 7.99795 7.9992 8.36915 7.85947 8.70649C7.71974 9.04383 7.48311 9.33216 7.17951 9.53502C6.87592 9.73788 6.51898 9.84615 6.15385 9.84615C5.66422 9.84615 5.19464 9.65165 4.84842 9.30543C4.5022 8.95921 4.30769 8.48963 4.30769 8ZM14.7692 12.3077H10.4177C9.9038 11.4242 9.12915 10.7213 8.2 10.2954C8.66584 9.8806 8.99461 9.33403 9.14274 8.72813C9.29087 8.12224 9.25136 7.48563 9.02945 6.9027C8.80753 6.31977 8.4137 5.81805 7.90015 5.46405C7.3866 5.11005 6.77759 4.92048 6.15385 4.92048C5.53011 4.92048 4.9211 5.11005 4.40754 5.46405C3.89399 5.81805 3.50016 6.31977 3.27825 6.9027C3.05633 7.48563 3.01682 8.12224 3.16495 8.72813C3.31308 9.33403 3.64186 9.8806 4.10769 10.2954C3.17854 10.7213 2.4039 11.4242 1.89 12.3077H1.23077V1.23077H14.7692V12.3077ZM2.46154 4.30769V3.07692C2.46154 2.91371 2.52637 2.75719 2.64178 2.64178C2.75719 2.52637 2.91371 2.46154 3.07692 2.46154H12.9231C13.0863 2.46154 13.2428 2.52637 13.3582 2.64178C13.4736 2.75719 13.5385 2.91371 13.5385 3.07692V10.4615C13.5385 10.6247 13.4736 10.7813 13.3582 10.8967C13.2428 11.0121 13.0863 11.0769 12.9231 11.0769H11.6923C11.5291 11.0769 11.3726 11.0121 11.2572 10.8967C11.1418 10.7813 11.0769 10.6247 11.0769 10.4615C11.0769 10.2983 11.1418 10.1418 11.2572 10.0264C11.3726 9.91099 11.5291 9.84615 11.6923 9.84615H12.3077V3.69231H3.69231V4.30769C3.69231 4.4709 3.62747 4.62743 3.51207 4.74284C3.39666 4.85824 3.24013 4.92308 3.07692 4.92308C2.91371 4.92308 2.75719 4.85824 2.64178 4.74284C2.52637 4.62743 2.46154 4.4709 2.46154 4.30769Z"
                  fill="#CCCCCC"
                />
              </svg>
              Tutors
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimonials");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimonials"
                  ? "  border-purple-600 text-purple-600"
                  : " border-transparent ")
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 0H14C14.55 0 15.02 0.2 15.41 0.59C15.8 0.98 16 1.45 16 2V9C16 9.55 15.8 10.02 15.41 10.41C15.02 10.8 14.55 11 14 11H13L8 16V11H2C1.45 11 0.98 10.8 0.59 10.41C0.2 10.02 0 9.55 0 9V2C0 1.45 0.2 0.98 0.59 0.59C0.98 0.2 1.45 0 2 0ZM13 2H2V3H13V2ZM14 5H2V6H14V5ZM11 8H2V9H11V8Z"
                  fill="#CCCCCC"
                />
              </svg>
              Testimonials
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
