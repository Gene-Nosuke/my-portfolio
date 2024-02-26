import * as React from "react";
import SimplyAboutMe from "./_components/SimplyAboutMe";
import Pickups from "./_components/Pickups";

/* interface Data {
  title: string;
  describtion: string;
  link: string;
} */

const Top = () => {
  return (
    <>
      <Pickups />
      <SimplyAboutMe />
    </>
  );
};

export default Top;
