import * as React from "react";

const SimplyAboutMe = () => {
  return (
    <div className="w-full max-w-xl min-h-32 my-8 p-4 bg-slate-100 shadow-md rounded-2xl flex justify-center">
      <div className="w-1/4 pt-4 flex justify-center items-start">
        <div className="w-16 h-16 flex justify-center items-center rounded-full bg-rose-300 shadow-md">
          <p className="text-xl text-rose-900">MJ</p>
        </div>
      </div>
      <div className="w-3/4 p-4 flex justify-end items-center">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias animi
          dolorum, velit odio et perspiciatis nemo cum laborum. Reiciendis,
        </p>
      </div>
    </div>
  );
};

export default SimplyAboutMe;
