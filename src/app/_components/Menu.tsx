import * as React from "react";

type classProps = {
  name: string; // ユーザーの名前
};

const Menu = () => {
  const menuChildlen = ["Gallery", "About Me", "Community", "Blog"];

  return (
    <div className=" absolute top-16 w-full bg-slate-100 border-b-2 border-slate-300 shadow-sm flex flex-col justify-center items-center">
      <ul className="w-full p-2 flex justify-center items-center gap-6">
        <li className="flex justify-center items-center">
          <a
            href="/"
            className="relative py-1 px-2 duration-300 rounded-xl hover:bg-slate-200 flex justify-center before:absolute before:bottom-0 before:w-2 before:hover:w-full before:border-rose-400 before:border-b-2 before:duration-300"
          >
            Top
          </a>
        </li>
        {menuChildlen.map((item) => {
          return (
            <li className="flex justify-center items-center">
              <a
                href={`/${item}`}
                className="relative py-1 px-2 duration-300 rounded-xl hover:bg-slate-200 flex justify-center before:absolute before:bottom-0 before:w-2 before:hover:w-full before:border-rose-400 before:border-b-2 before:duration-300 "
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
