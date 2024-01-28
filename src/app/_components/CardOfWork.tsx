import * as React from "react";

interface DatasOfWorks {
  title: string;
  describtion: string;
  link: string;
}

/* const data = {
  title: "Blicks to Break",
  describtion: "This is my first project built with my own skills",
  link: "http://niboshingo.s239.xrea.com/",
}; */

const CardOfWork: React.FC<DatasOfWorks> = (data) => {
  return (
    <a
      href={data.link}
      className="w-full max-w-xs h-36 p-6 rounded-lg bg-slate-100 shadow-md"
    >
      <h3 className=" font-medium text-lg">{data.title}</h3>
      <p className="text-sm">{data.describtion}</p>
    </a>
  );
};

export default CardOfWork;
