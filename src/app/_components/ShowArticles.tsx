import React from "react";
import { v4 as uuidv4 } from "uuid";
import ArticleCard from "./ArticleCard";
import getArticles from "../_db/data_articles";

const ShowArticles = () => {
  const articles = getArticles();
  return (
    <div className="w-full p-4 mt-8 rounded-xl bg-slate-100 shadow-md flex flex-col items-center justify-center">
      <h2 className="mb-4 p-4 text-lg font-semibold text-rose-700 rounded-md bg-rose-200">
        記事
      </h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid- gap-4">
        {articles.map((article) => {
          return (
            <ArticleCard
              key={uuidv4()}
              title={article.title}
              text={article.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowArticles;
