import React from "react";

const Navbar = () => {
  return (
    <div className="container text-white p-3">
      <div class="flex items-center justify-between relative">
        <h1 className="font-bold text-lg">BERITA UHUY</h1>
        <nav>
          <ul className="flex ">
            <li className="mr-8 font-normal">Dunia</li>
            <li className="mr-8 font-normal">Nasional</li>
            <li className="mr-8 font-normal">Olahraga</li>
            <li className="mr-8 font-normal">Politik</li>
            <li className="mr-8 font-normal">Hiburan</li>
            <li className="mr-8 font-normal">Anime</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
