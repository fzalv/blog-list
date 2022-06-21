import React from "react";
import Image from "next/image";
import styles from "../styles/PostHead.module.css";
import HPhoto1 from "../public/img/head/HPhoto1.jpg";

const PostHead = () => {
  return (
    <div className="intro">
      <div className="font-bold text-xl pb-8">
        <h1 className="border-l-8 pl-3 border-button">HEADLINE NEWS</h1>
      </div>

      {/* HEADLINE */}
      <div className="bg-primary p-3 text-white rounded-md">
        <div className="flex p-1">
          <div className="container flex-initial w-2/3">
            <h1 className="text-base font-bold pb-2">Rara The Rain Shaman</h1>
            <Image src={HPhoto1} className="rounded-md" />
          </div>
          <div className="container flex-initial w-1/2 ml-5">
            <p className="pb-3 pt-7 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, minus commodi? Aliquid nam eos, itaque in eaque recusandae ducimus deleniti vero. Provident aliquid tempore quam soluta labore, quasi sed omnis facere ducimus
              ipsam, sint incidunt. Culpa minima eaque commodi ipsum debitis ea saepe dicta deserunt unde. Corporis aliquam delectus hic exercitationem illo, tempore placeat. Quia deserunt eum exercitationem nam repellat!
            </p>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <p className="ml-2 font-normal underline underline-offset-4">Posted on Februari 18,2022</p>
            </div>
          </div>
        </div>
      </div>
      {/* HEADLINE END */}

      <div className="flex pt-10">
        <div className="bg-primary w-1/3 p-3 rounded-md flex ">
          <div className={styles.img1}>
            {/* <Image src={HPhoto3} className="rounded-md" alt="" /> */}
            <div className=" w-full p-2 mt-48 bg-secondary rounded-b-md opacity-80">
              <p className="py-2 font-semibold text-black">Setelah 2tahun akhirnya PRJ ada lagi!!</p>
            </div>
          </div>
        </div>

        <div className="bg-primary w-1/3 p-3 mx-4 rounded-md flex">
          <div className={styles.img2}>
            {/* <Image src={HPhoto3} className="rounded-md" alt="" /> */}
            <div className=" w-full p-2 mt-48 bg-secondary rounded-b-md opacity-80">
              <p className="py-2 font-semibold text-black">Ada apa dengan El Rumi dan Winson?!</p>
            </div>
          </div>
        </div>

        <div className="bg-primary w-1/3 p-3 rounded-md flex">
          <div className={styles.img3}>
            {/* <Image src={HPhoto3} className="rounded-md" alt="" /> */}
            <div className=" w-full p-2 mt-48 bg-secondary rounded-b-md opacity-80">
              <p className="py-2 font-semibold text-black">Elon Musk akan membeli Twitter?!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHead;
