import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";


function Bloag() {
  // consuming
  const { loading, posts } = useContext(AppContext);
  console.log("Inside bloag loading",loading);
  console.log("inside blog post",posts)

  return (
    <div className="w-[500px] relative ">
      {loading ? (
        <Spinner />
      ) : posts.lenght === 0 ? (
        <div className="text-center font-mono font-black">
          <h1>No post</h1>
        </div>
      ) : (
        posts.map((post) => (
          <div  key={post.id}>
            <p className="font-bold text-red-400 mb-2">{post.title}</p>
            <p className="text-xs mb-2">
              By <span>{post.author}</span>on <span>{post.category}</span>
            </p>
            <p className="font-sans text-base text-blue-500">
              Posted on <span>{post.date}</span>
            </p>
            <p className="mb-2">{post.content}</p>

            <div className="underline text-blue-700">
              {post.tags.map((tag,index) => {
                return <span key={index}>{`#${tag}`.split('')}</span>;
              })}
            </div>
          </div>
        ))
      )}

    </div>
  );
}

export default Bloag;
