import * as React from "react";
import CardOfWork from "./CardOfWork";
import datas from "../_db/works";

const ViewWorks = () => {
  return (
    <div className=" m-8 p-8 bg-slate-100 rounded-xl flex flex-wrap justify-center items-center gap-8">
      {datas.map((data, i) => {
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
  );
};

export default ViewWorks;
