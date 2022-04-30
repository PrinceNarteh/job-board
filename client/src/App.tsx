import React from "react";
import Navbar from "./components/Navbar";

const jobs = ["Frontend Developer", "Backend Developer", "Fullstack Developer"];

function App() {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh_-_56px)] max-w-5xl mx-auto px-10 2xl:px-0 rounded-md">
        <h1 className="text-5xl py-10 font-bold italic text-gray-500">
          Job Board
        </h1>

        <ul className="w-full shadow-md px-5 py-3 border border-gray-200">
          {jobs.map((job, idx) => (
            <li
              key={idx}
              className="text-xl font-medium text-gray-700 border-b border-gray-300 py-5 pl-2 hover:bg-slate-100 last:border-b-0 cursor-pointer">
              {job}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
