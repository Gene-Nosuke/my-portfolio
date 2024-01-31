import * as React from "react";
import CardOfWork from "./CardOfWork";
import data_works from "../_db/works";

const ViewWorks = () => {
  return (
    <div className="w-full p-4 mt-8 rounded-xl bg-slate-100 shadow-md flex flex-col items-center justify-center">
      <h2 className="mb-4 p-4 text-lg font-semibold text-rose-700 rounded-md bg-rose-200">
        Works
      </h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid- gap-4">
        {data_works.map((data, i) => {
          return (
            <CardOfWork
              key={i}
              title={data.title}
              describtion={data.describtion}
              link={data.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ViewWorks;
