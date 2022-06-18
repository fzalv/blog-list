import React from "react";
import Image from "next/image";
import GPhoto1 from "../public/img/GPhoto1.jpg";
import GPhoto2 from "../public/img/GPhoto2.jpg";
import GPhoto3 from "../public/img/GPhoto3.jpg";

const PostPhoto = () => {
  return (
    <div className="intro">
      <div className="font-bold text-xl pb-8">GALERI PHOTO</div>
      <div className="bg-slate-300 p-2 mb-2 h-64 rounded-md flex flex-wrap">
        <Image src={GPhoto1} className="rounded-md" alt="" />
        <div className=" w-full rounded-b-md p-2">
          <p className="pb-1">BAHAYA MENGANGGUR!!</p>
          <p className="pt-1 font-normal underline">Posted on Februari 18,2022</p>
        </div>
      </div>

      <div className="bg-slate-300 p-2 mb-2 h-64 rounded-md flex flex-wrap">
        <Image src={GPhoto2} className="rounded-md" alt="" />
        <div className=" w-full rounded-b-md p-2">
          <p className="pb-1">BAHAYA MENGANGGUR!!</p>
          <p className="pt-1 font-normal underline">Posted on Februari 18,2022</p>
        </div>
      </div>

      <div className="bg-slate-300 p-2 mb-2 h-64 rounded-md flex flex-wrap">
        <Image src={GPhoto3} className="rounded-md" alt="" />
        <div className=" w-full rounded-b-md p-2">
          <p className="pb-1">BAHAYA MENGANGGUR!!</p>
          <p className="pt-1 font-normal underline">Posted on Februari 18,2022</p>
        </div>
      </div>
    </div>
  );
};

export default PostPhoto;
