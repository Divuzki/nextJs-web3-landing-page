import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { BiShoppingBag } from "react-icons/bi";
import { CiBank, CiSearch } from "react-icons/ci";
import { MdOutlineHome, MdOutlineStore } from "react-icons/md";
import { motion } from "framer-motion";

import ClickOutsideOverlay from "./ClickOutsideOverlay";

const MenuComponent = ({
  navLinks,
  handleOpenMenu,
  openMenu,
  path,
  className,
}) => {
  const router = useRouter();
  return (
    <React.Fragment>
      {openMenu && <ClickOutsideOverlay func={handleOpenMenu} />}
      <div
        className={
          className ||
          `absolute ${
            openMenu
              ? "z-50 opacity-100 scale-100"
              : "opacity-0 scale-75 z-[-1] pointer-events-none"
          } transition-all top-2 h-auto flex flex-col m-auto w-[96%] left-0 right-0 rounded-md shadow-2xl drop-shadow-2xl bg-slate-900 border-b border-l border-r border-gray-800`
        }
      >
        <div className="w-full flex gap-4 px-3 py-2 items-center">
          <button
            onClick={handleOpenMenu}
            style={{ backgroundImage: `url(/profile.jpg)` }}
            className={`${
              openMenu ? "duration-599" : ""
            } uppercase select-none w-12 h-12 text-base text-white active:scale-75 transition-all duration-75
              flex justify-center bg-center bg-cover z-10 bg-no-repeat items-center rounded-full drop-shadow-md py-2
              ease-in-out px-3 bg-amber-600 font-bold`}
          >
            {/* enter text here if no profile pic */}
          </button>
          <div className="flex flex-col h-full justify-start items-center">
            {openMenu && (
              <span className="fade-in text-amber-600 font-semibold">
                Divine Ikhuoria
              </span>
            )}
          </div>
        </div>
        {openMenu && (
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: "100%",
              transition: {
                delayChildren: 0.5,
              },
            }}
            exit={{ width: 0 }}
            className="h-0.5 mx-auto mb-2 bg-amber-600"
          ></motion.div>
        )}

        <ul className="py-2 px-2 flex flex-col select-none gap-2">
          {navLinks.map((nav, idx) => (
            <li
              onClick={() => router.push(nav.path)}
              className={`font-semibold p-2 rounded-md shadow-md items-center capitalize flex gap-2 transition-all 
              group cursor-pointer active:opacity-100 ${
                path === nav.path
                  ? "opacity-100 md:hover:bg-slate-800"
                  : "opacity-80 md:hover:opacity-100 md:hover:bg-slate-800"
              }`}
              key={idx}
            >
              {nav.icon && (
                <div className="p-2 group-active:scale-110 transition-all rounded-full bg-[#353484]">
                  {nav.icon}
                </div>
              )}
              <Link href={nav.path}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

const NavbarComponent = () => {
  const router = useRouter();
  const path = router.pathname;
  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <MdOutlineHome className="w-5 h-5 text-white" />,
    },
    {
      name: "Auction",
      path: "/auction",
      icon: <MdOutlineStore className="w-5 h-5 text-white" />,
    },
    {
      name: "Merch",
      path: "/merch",
      icon: <BiShoppingBag className="w-5 h-5 text-white" />,
    },
    {
      name: "Bank",
      path: "/bank",
      icon: <CiBank className="w-5 h-5 text-white" />,
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="fixed z-50 w-screen backdrop-blur-md bg-navOverlay md:backdrop-blur-none md:bg-transparent md:p-2">
      {/* <div className="w-[95%] h-8 absolute bg-slate-50 m-2"></div> */}
      <div className="hidden md:flex p-4 w-full items-center md:bg-navOverlay md:backdrop-blur-md md:rounded-lg">
        <div className="w-full">
          <div className="px-4 py-2 w-max bg-amber-400 rounded-lg shadow flex items-center justify-center gap-2">
            <div
              style={{ backgroundImage: "url(/logo/logo.png)" }}
              className="bg-center bg-cover bg-no-repeat p-2 w-6 h-6 rounded-md bg-[#5119B9] border-[0.5px] box-shadow-md"
            ></div>
            <span className="font-semibold text-md text-white">
              BotBuddyz<span className="font-mono">Nft</span>
            </span>
          </div>
        </div>
        {/* center */}
        <ul className="flex gap-8 justify-center w-full items-center">
          {navLinks.map((nav, idx) => (
            <li
              className={`font-semibold capitalize transition-all group cursor-pointer active:opacity-100 active:text-white ${
                path === nav.path
                  ? "opacity-100 text-white"
                  : "opacity-75 md:hover:opacity-100 md:hover:text-white"
              }`}
              key={idx}
            >
              <Link href={nav.path}>{nav.name}</Link>
              <div
                className={`${
                  path === nav.path ? "w-full" : "w-2 group-hover:w-full"
                } h-1 bg-amber-600 m-auto transition-all rounded-full`}
              ></div>
            </li>
          ))}
        </ul>
        <div className="flex smd:gap-4 gap-2 w-full justify-end items-center">
          <button className="select-none active:scale-75">
            <CiSearch className="w-6 h-6" />
          </button>

          <div
            className="flex items-center justify-center gap-1 rounded-xl border-[0px] border-border
           bg-white bg-opacity-10 px-3 py-2 transition-all text-xs cursor-pointer hover:bg-opacity-5 css-r6zu0r"
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[12px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 0C1.34315 0 0 1.34315 0 3V17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20
               17V15.8293C21.1652 15.4175 22 14.3062 22 13V11C22 9.69378 21.1652 8.58254 20 8.17071V7C20 5.34315 18.6569 4 17 4V3C17 1.34315 15.6569
               0 14 0H3ZM3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4H15V3C15 2.44772 14.5523 2 14 2H3ZM2 5.82929V17C2 17.5523 2.44772 18 3
               18H17C17.5523 18 18 17.5523 18 17V16H15C13.3431 16 12 14.6569 12 13V11C12 9.34315 13.3431 8 15 8H18V7C18 6.44772 17.5523 6 17
               6H3C2.64936 6 2.31278 5.93985 2 5.82929ZM15 10C14.4477 10 14 10.4477 14 11V13C14 13.5523 14.4477 14 15 14H19C19.5523 14 20 13.5523
               20 13V11C20 10.4477 19.5523 10 19 10H15Z"
                fill="white"
              ></path>
            </svg>
            <div className="text-white flex gap-1">
              Connect <span className="smd:block hidden">wallet</span>
            </div>
          </div>
          <button
            onClick={handleOpenMenu}
            style={{ backgroundImage: `url(/profile.jpg)` }}
            className="uppercase w-12 h-12 text-base text-white active:scale-75 transition-all duration-75
           flex justify-center bg-center bg-cover bg-no-repeat items-center rounded-full drop-shadow-md py-2
           ease-in-out px-3 bg-amber-600 font-bold"
          >
            {/* enter text here if no profile pic */}
          </button>
          <MenuComponent
            navLinks={navLinks}
            handleOpenMenu={handleOpenMenu}
            openMenu={openMenu}
            path={path}
            className={`absolute ${
              openMenu
                ? "z-50 opacity-100 scale-100"
                : "opacity-0 scale-75 z-[-1] pointer-events-none"
            } transition-all top-[4.5rem] h-auto flex flex-col w-[25rem] right-4 rounded-lg shadow-2xl drop-shadow-2xl bg-slate-900 border-b border-l border-r border-gray-800`}
          />
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden flex p-4 w-full items-center">
        <div
          className={`w-full transition-all ${
            openMenu ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="px-4 py-2 w-max bg-amber-400 rounded-lg shadow flex items-center justify-center gap-2">
            <div
              style={{ backgroundImage: "url(/logo/logo.png)" }}
              className="bg-center bg-cover bg-no-repeat p-2 w-6 h-6 rounded-md bg-[#5119B9] border-[0.5px] box-shadow-md"
            ></div>
            <span className="font-semibold text-md text-white">
              BotBuddyz<span className="font-mono">Nft</span>
            </span>
          </div>
        </div>
        <div
          className={`flex gap-2 w-full justify-end transition-all items-center`}
        >
          <button
            className={`select-none active:scale-75 transition-all ${
              openMenu ? "opacity-0" : "opacity-100"
            }`}
          >
            <CiSearch className="w-6 h-6" />
          </button>
          <button
            onClick={handleOpenMenu}
            style={{ backgroundImage: `url(/profile.jpg)` }}
            className={`${
              openMenu ? "-translate-x-[77vw] opacity-0" : ""
            } uppercase select-none w-12 h-12 text-base text-white active:scale-75 transition-all duration-75
            flex justify-center bg-center bg-cover z-10 bg-no-repeat items-center rounded-full drop-shadow-md py-2
            ease-in-out px-3 bg-amber-600 font-bold`}
          >
            {/* enter text here if no profile pic */}
          </button>
          {/* menu */}
          <MenuComponent
            navLinks={navLinks}
            handleOpenMenu={handleOpenMenu}
            openMenu={openMenu}
            path={path}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
