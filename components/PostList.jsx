import React, { useEffect, useState } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPost] = useState([]);
  const getPost = async () => {
    try {
      const response = await axios.get("https://gorest.co.in/public/v2/posts");
      setPost(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="intro">
      <div className="font-bold text-xl pb-8 ">
        <h1 className="border-l-8 pl-3 border-button">BERITA TERKINI</h1>
      </div>

      {posts.slice(0, 5).map((post, index) => {
        return (
          <div className="bg-primary p-3 mb-2 rounded-md text-white" key={index}>
            <h1 className="text-base font-semibold pb-2">{post.title}</h1>
            {/* <p className="pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, non?</p> */}
            <a href="/detail" className="border-solid border-2 border-yellow-600 bg-button rounded-md py-1 px-4 font-normal text-sm text-black">
              Baca Selengkapnya
            </a>
            <div className="flex items-center pt-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <p className="ml-2 font-normal underline">Posted on Februari 18,2022</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
