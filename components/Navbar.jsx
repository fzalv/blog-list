import React from "react";

const Navbar = () => {
  return (
    <div className="container text-white p-3">
      <div className="flex items-center justify-between relative">
        <h1 className="font-bold text-lg">
          <a href="/">FAST NEWS</a>
        </h1>
        <nav>
          <ul className="flex ">
            <li className="mr-8 font-normal hover:border-b border-button">
              <a href="#">Explore</a>
            </li>
            <li className="mr-8 font-normal hover:border-b border-button">
              <a href="#">Nasional</a>
            </li>
            <li className="mr-8 font-normal hover:border-b border-button">
              <a href="#">Olahraga</a>
            </li>
            <li className="mr-8 font-normal hover:border-b border-button">
              <a href="#">Politik</a>
            </li>
            <li className="mr-8 font-normal hover:border-b border-button">
              <a href="#">Hiburan</a>
            </li>
            <li className="mr-8 font-normal hover:border-b border-button">
              <a href="#">Anime</a>
            </li>
            <li className="mr-8 font-normal border border-yellow-600 rounded-full px-2 hover:bg-button hover:text-black">
              <a href="/user">User Pages</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
