import React, { useEffect, useState } from "react";
import axios from "axios";

const DetailPost = () => {
  const [details, setDetails] = useState([]);
  const getDetails = async () => {
    try {
      const response = await axios.get("https://gorest.co.in/public/v2/posts");
      setDetails(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const [comments, setComments] = useState([]);
  const getComments = async () => {
    try {
      const response = await axios.get("https://gorest.co.in/public/v2/comments");
      setComments(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="intro">
      {/* DETAIL BERITA */}
      <div className="font-bold text-xl pb-8">
        <h1 className="border-l-8 pl-3 border-button">DETAIL BERITA</h1>
      </div>

      {details.slice(0, 1).map((detail, index) => {
        return (
          <div className="bg-primary p-3 text-white rounded-md" key={index}>
            <div className="container">
              <h1 className="text-lg font-bold pb-2">{detail.title}</h1>
              <p className="pb-3 pt-3 text-justify">{detail.body}</p>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <p className="ml-2 font-normal underline underline-offset-4">Posted on Februari 18,2022</p>
              </div>
            </div>
          </div>
        );
      })}
      {/* DETAIL BERITA END */}

      {/* COMMENT */}
      <div className="font-bold text-xl pt-5 pb-8">
        <h1 className="border-l-8 pl-3 border-button">COMMENT</h1>
      </div>
      <div className="bg-primary p-3  rounded-md text-white">
        {comments.slice(0, 5).map((comment, index) => {
          return (
            <div className="pb-5 " key={index}>
              <div className="flex items-center pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="ml-3">
                  <h1 className="font-semibold">{comment.name}</h1>
                  <p className="text-button">{comment.email}</p>
                </div>
              </div>
              <p className="pb-1 border-b border-button">{comment.body}</p>
            </div>
          );
        })}
      </div>
      {/* COMMENT END */}
    </div>
  );
};

export default DetailPost;
