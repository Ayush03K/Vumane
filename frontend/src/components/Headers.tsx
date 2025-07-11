// import React from 'react';
import { CiSearch } from "react-icons/ci";

export default function Headers() {
  return (
    // <div className="relative">
    <div className="bg-primary h-20 w-full text-onwghite flex justify-evenly items-center fixed top-0 left-0 z-50 ">
      Vumane
      <div className="flex items-center bg-primary px-4 ">
        <CiSearch className="text-onwghite text-2xl mr-1 stroke-1" />
        <input
          type="text"
          placeholder=" Blog_"
          className="bg-primary text-onwghite placeholder-onwghite w-96 px-2 py-1 rounded"
        />
      </div>
      <div>
        Explore More
      </div>
      <div>
        [ * ]
      </div>
    </div>
    // </div>
  );
}
