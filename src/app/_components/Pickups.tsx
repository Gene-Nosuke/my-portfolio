import * as React from "react";
import CardOfWork from "../_components/CardOfWork";
import datas from "../_db/works";

const Pickups = () => {
  let items: Array<any> = [];
  for (let i = 0; i <= 2; i++) {
    items.push(datas[i]);
  }
  const pickup = items;

  return (
    <div className="w-2/3 p-6 rounded-xl bg-slate-100">
      <h2 className="mb-6 ml-6 font-semibold">Top picks</h2>
      <div className="flex justify-center items-center gap-4">
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
