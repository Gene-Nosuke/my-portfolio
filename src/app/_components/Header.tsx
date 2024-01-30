"use client";

import * as React from "react";
import Menu from "./Menu";

const Header = () => {
  const [menuStatus, setMenuStatus] = React.useState(true);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center">
      <div className="relative w-full">
        <header className="absolute left-0 top-0 z-50 w-full h-16 bg-slate-100 border-b-2 border-slate-300 shadow-sm flex justify-center items-center">
          <div className="relative left-0 top-0 w-full max-w-6xl h-16 flex justify-center">
            <div className="absolute left-0 w-28 h-16 flex justify-center items-center">
              <button
                onClick={() => {
                  menuStatus ? setMenuStatus(false) : setMenuStatus(true);
                  console.log(menuStatus);
                }}
                className="w-12 h-8 text-slate-600 hover:text-slate-500 bg-slate-300 hover:bg-slate-200 border-2 border-slate-200 hover:border-slate-300 rounded-full duration-200 "
              >
                {menuStatus && "I"}
                {menuStatus || "O"}
              </button>
            </div>
            <div className="flex justify-center items-center">
              <a href="/" className="w-fit text-2xl font-bold">
                Portfolio
              </a>
            </div>
          </div>
        </header>
        {menuStatus && <Menu />}
      </div>
    </div>
  );
};

export default Header;

{
  /*       <div className="w-full border-b-2 border-slate-300 shadow-sm flex flex-col justify-center items-center">
        <div className="w-full h-16"></div>
        <div className=" w-full h-auto bg-slate-100 shadow-sm flex justify-center transition-all">
          <ul className="w-full p-2 flex justify-center items-center gap-6">
            <li className="flex justify-center items-center">
              <a
                href="/"
                className="relative p-1 duration-300 rounded-xl hover:bg-slate-200 flex justify-center before:absolute before:bottom-0 before:w-2 before:hover:w-full before:border-rose-400 before:border-b-2 before:duration-300"
              >
                Top
              </a>
            </li>
            {menuChildlen.map((item) => {
              return (
                <li className="flex justify-center items-center">
                  <a
                    href={`/${item}`}
                    className="relative p-1 duration-300 rounded-xl hover:bg-slate-200 flex justify-center before:absolute before:bottom-0 before:w-2 before:hover:w-full before:border-rose-400 before:border-b-2 before:duration-300 "
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div> */
}
