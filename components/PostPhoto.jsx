import React from "react";
import Image from "next/image";
import GPhoto1 from "../public/img//gallery/GPhoto1.jpg";
import GPhoto2 from "../public/img//gallery/GPhoto2.jpg";
import GPhoto3 from "../public/img//gallery/GPhoto3.jpg";

const PostPhoto = () => {
  return (
    <div className="intro">
      <div className="font-bold text-xl pb-8">
        <h1 className="border-l-8 pl-3 border-button">GALERI PHOTO</h1>
      </div>
      <div className="bg-primary p-3 mb-2 h-64 rounded-md flex flex-wrap">
        <Image src={GPhoto1} className="rounded-md" alt="" />
        <div className=" w-full text-white pt-5">
          <p className="font-bold pb-1">BAHAYA MENGANGGUR!!</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <p className="ml-2 font-normal underline">Posted on Februari 18,2022</p>
          </div>
        </div>
      </div>

      <div className="bg-primary p-3 mb-2 h-64 rounded-md flex flex-wrap">
        <Image src={GPhoto2} className="rounded-md" alt="" />
        <div className=" w-full text-white pt-5">
          <p className="font-bold pb-1">BAHAYA MENGANGGUR!!</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <p className="ml-2 font-normal underline">Posted on Februari 18,2022</p>
          </div>
        </div>
      </div>

      <div className="bg-primary p-3 mb-2 h-64 rounded-md flex flex-wrap">
        <Image src={GPhoto3} className="rounded-md" alt="" />
        <div className=" w-full text-white pt-5">
          <p className="font-bold pb-1">BAHAYA MENGANGGUR!!</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <p className="ml-2 font-normal underline">Posted on Februari 18,2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPhoto;
