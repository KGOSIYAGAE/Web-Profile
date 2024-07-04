import React, { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import "./Navbar.css";

function Navbar() {
  const [navScroll, setNavScroll] = useState(false);
  const [isShow, setIsShow] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
    console.log(window.scrollY);
    console.log(navScroll);
  });

  const handleSideNav = () => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  };

  return (
    <div className={`sticky top-0`}>
      <div className={`md:p-4 ${navScroll ? "md:bg-color-nav" : "bg-transparent"} md:transition-all invisible md:visible`}>
        <div className="flex flex-row items-center justify-center mt-3 gap-20">
          <span className="hover:text-blue-500 cursor-pointer">Home</span>
          <span className="hover:text-blue-500 cursor-pointer">About</span>
          <span className="hover:text-blue-500 cursor-pointer">Skill</span>
          <span className="hover:text-blue-500 cursor-p$ointer">Portfolio</span>
          <span className="hover:text-blue-500 cursor-pointer">Contatct Me</span>
        </div>
      </div>

      <div className={`w-full visible md:invisible transition-all absolute top-3 py-2 -mt-5 ${navScroll ? "bg-color-nav" : "bg-transparent"}`}>
        <MdMenu className="text-6xl hover:cursor-pointer" onClick={handleSideNav} />
        <div className={`w-full h-[900px] flex flex-col justify-center items-center bg-neutral-800 absolute py-10 ${isShow ? "translate-x-0" : "-translate-x-full"} transition-all -top-1`}>
          <MdClose className="absolute top-3 left-3 text-red-500 text-6xl hover:cursor-pointer " onClick={handleSideNav} />
          <span className="hover:bg-neutral-900 hover:text-blue-500 cursor-p$ointer p-8 text-4xl">Home</span>
          <span className="hover:bg-neutral-900 hover:text-blue-500 cursor-p$ointer p-8 text-4xl">About</span>
          <span className="hover:bg-neutral-900 hover:text-blue-500 cursor-p$ointer p-8 text-4xl">Skill</span>
          <span className="hover:bg-neutral-900 hover:text-blue-500 cursor-p$ointer p-8 text-4xl">Portfolio</span>
          <span className="hover:bg-neutral-900 hover:text-blue-500 cursor-p$ointer p-8 text-4xl">Contatct Me</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
