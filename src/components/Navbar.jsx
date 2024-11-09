import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navContainer fixed top-0 left-0 w-full h-16 flex items-center px-6 bg-transparent text-white z-50 backdrop-blur-md shadow-md">
      {/* Logo Section */}
      <div className="logo flex items-center">
        <img src={logo} alt="Logo" className="h-10 object-contain" />
      </div>

      {/* Navigation Links */}
      <div className="navList ml-auto">
        <ul className="flex gap-8 text-lg font-semibold">
          <li className="navItem text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
            History
          </li>
          <li className="navItem text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
            About Us
          </li>
          <li className="navItem text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
            Profile
          </li>
          <li className="navItem">
            {/* Beautiful Add List Button */}
            <button className="px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Add List
                </button>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

