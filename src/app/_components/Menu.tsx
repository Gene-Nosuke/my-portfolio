import * as React from "react";

const Menu = () => {
  const menuChildlen = [
    ["Top", "/"],
    ["Gallery", "/Gallery"],
    ["About Me", "/About Me"],
    ["Blog", "/Blog"],
  ];

  return (
    <div
      id="Nav"
      className={
        " absolute top-16 w-full bg-slate-100 border-b-2 border-slate-300 shadow-sm flex justify-center items-center"
      }
    >
      <ul className="w-full max-w-xl p-2 flex justify-around items-center ">
        {menuChildlen.map((item) => {
          return (
            <li key={item[1]} className="flex justify-center items-center">
              <a
                href={`${item[1]}`}
                className={
                  "relative py-1 px-2 duration-300 rounded-xl hover:bg-slate-200 flex justify-center before:absolute before:bottom-0 before:w-2 before:hover:w-full before:border-rose-400 before:border-b-2 before:duration-300 "
                }
              >
                {item[0]}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
