import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-md py-3">
      <div className="container flex justify-between items-center max-w-5xl mx-auto px-10 2xl:px-0">
        <h3 className="text-teal-500 text-2xl font-semibold">
          Job<span className="text-red-500">Board</span>
        </h3>
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <NavLink
              to="/"
              className="text-gray-500 hover:text-gray-700 text-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/post-job"
              className="text-gray-500 hover:text-gray-700 text-lg">
              Post Job
            </NavLink>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-lg">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
