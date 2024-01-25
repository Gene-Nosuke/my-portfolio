import * as React from "react";

const CardOfWork = () => {
  const data = {
    title: "Blicks to Break",
    link: "url",
    desc: "This is my first project built with my own skills",
  };
  return (
    <div className=" p-6 rounded-lg bg-slate-100 shadow-md">
      <h3 className=" font-medium text-lg">{data.title}</h3>
      <p className=" text-sm">{data.desc}</p>
    </div>
  );
};

export default CardOfWork;
