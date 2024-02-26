import * as React from "react";
import CardOfWork from "../_components/CardOfWork";
import data_works from "../_db/works";

const Pickups = () => {
  let items: Array<any> = [];
  for (let i = 0; i <= 2; i++) {
    items.push(data_works[i]);
  }
  const pickup = items;

  return (
    <div
      className={
        " w-full mt-8 p-4 rounded-xl bg-slate-100 shadow-md flex flex-col justify-center items-center "
      }
    >
      <h2 className="mb-4 p-4 text-lg font-semibold text-rose-700 rounded-md bg-rose-200">
        Top picks
      </h2>
      <div className={"w-full grid grid-cols-2 md:grid-cols-3 gap-4"}>
        {pickup.map((data: any, i) => {
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
    </div>
  );
};

export default Pickups;
