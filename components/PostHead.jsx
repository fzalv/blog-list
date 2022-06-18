import React from "react";

const PostHead = () => {
  return (
    <div className="intro">
      <div className="font-bold text-xl pb-8">HEADLINE NEWS</div>

      <div className="bg-blue-600 p-2 text-white rounded-md">
        <h1 className="text-base font-semibold pb-2">Judul Berita</h1>
        <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, non?</p>
        <a href="#" className="border-solid border-2 border-green-800 bg-green-600 rounded-md py-1 px-4 font-normal text-sm">
          Baca Selengkapnya
        </a>
        <p className="pt-2 pb-2 font-medium underline">Posted on Februari 18,2022</p>
      </div>
    </div>
  );
};

export default PostHead;
