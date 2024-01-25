import * as React from "react";
import CardOfWork from "./CardOfWork";

const ViewWorks = () => {
  return (
    <div className=" m-8 p-8 bg-slate-100 rounded-xl grid grid-cols-2 gap-4">
      <CardOfWork />
      <CardOfWork />
      <CardOfWork />
      <CardOfWork />
    </div>
  );
};

export default ViewWorks;
