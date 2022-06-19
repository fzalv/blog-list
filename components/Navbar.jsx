import React from "react";

const Navbar = () => {
  return (
    <div className="container text-white p-3">
      <div className="flex items-center justify-between relative">
        <h1 className="font-bold text-lg">
          <a href="/">BERITA UHUY</a>
        </h1>
        <nav>
          <ul className="flex ">
            <li className="mr-8 font-normal">
              <a href="#">Dunia</a>
            </li>
            <li className="mr-8 font-normal">
              <a href="#">Nasional</a>
            </li>
            <li className="mr-8 font-normal">
              <a href="#">Olahraga</a>
            </li>
            <li className="mr-8 font-normal">
              <a href="#">Politik</a>
            </li>
            <li className="mr-8 font-normal">
              <a href="#">Hiburan</a>
            </li>
            <li className="mr-8 font-normal">
              <a href="#">Anime</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
