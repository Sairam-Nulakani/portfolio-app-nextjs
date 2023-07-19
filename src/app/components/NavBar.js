import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <section className=" min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-bold font-burtons">SAIRAM NULAKANI</h1>
        <ul className="flex items-center">
          <li>Home</li>
          <li>
            <BsFillMoonStarsFill className="text-2xl cursor-pointer" />
          </li>
          <li>
            <a
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
