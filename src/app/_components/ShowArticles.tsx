import React from "react";
import getArticles from "../_db/blog_article.ts";
import ArticleCard from "./ArticleCard";

const ShowArticles = () => {
  const articles = getArticles();

  return (
    <div className="w-full p-4 mt-8 rounded-xl bg-slate-100 shadow-md flex flex-col items-center justify-center">
      <h2 className="mb-4 p-4 text-lg font-semibold text-rose-700 rounded-md bg-rose-200">
        記事
      </h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid- gap-4">
        {articles.map((article) => {
          return <ArticleCard title={article.title} text={article.text} />;
        })}
      </div>
    </div>
  );
};

export default ShowArticles;
