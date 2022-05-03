import {useQuery} from "@apollo/client";
import React from "react";
import {GET_JOBS} from "../graphql/queries";

const Home = () => {
  const {loading, error, data} = useQuery(GET_JOBS);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }

  console.log(data);

  return (
    <div className="h-[calc(100vh_-_56px)] max-w-5xl mx-auto px-10 2xl:px-0 rounded-md">
      <h1 className="text-5xl py-10 font-bold italic text-gray-500">
        Job Board
      </h1>

      <ul className="w-full shadow-md px-5 py-3 border border-gray-200">
        {data?.jobs.length === 0 && (
          <li className="text-xl text-center font-medium text-gray-700 border-b border-gray-300 py-5 pl-2 hover:bg-slate-100 last:border-b-0 cursor-pointer">
            No Job Posted Yet
          </li>
        )}

        {data?.jobs.map((job: any, idx: number) => (
          <li
            key={idx}
            className="text-xl font-medium text-gray-700 border-b border-gray-300 py-5 pl-2 hover:bg-slate-100 last:border-b-0 cursor-pointer">
            {job.title} at {job.company.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
