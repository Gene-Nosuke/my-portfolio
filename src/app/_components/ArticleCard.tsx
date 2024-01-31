import React from "react";
interface props {
  title: string;
  text: string;
}

const ArticleCard = (props: props) => {
  return (
    <div className="max-w-xs p-4 bg-slate-100 shadow-md rounded-xl flex flex-col space-y-2 items-center justify-center">
      <h2 className="text-lg">{props.title}</h2>
      <p className=" text-sm">{props.text}</p>
    </div>
  );
};

export default ArticleCard;
