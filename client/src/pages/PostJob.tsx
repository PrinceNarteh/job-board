import React from "react";

const PostJob = () => {
  return (
    <div className="h-[calc(100vh_-_56px)] max-w-5xl mx-auto px-10 2xl:px-0 rounded-md">
      <h1 className="text-5xl py-10 font-bold italic text-gray-500">
        Post A New Job
      </h1>

      <form className="w-full shadow-md px-5 py-3 border border-gray-200">
        <div>
          <label
            htmlFor="title"
            className="block text-gray-600 text-3xl tracking-wider font-semibold">
            Title
          </label>
          <input type="text" className="w-full border border-gray-300 mt-2" />
        </div>
        <div className="mt-3">
          <label
            htmlFor=""
            className="block text-gray-600 text-3xl tracking-wider font-semibold mb-2">
            Description
          </label>
          33
        </div>
      </form>
    </div>
  );
};

export default PostJob;
