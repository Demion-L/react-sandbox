import React from "react";
import DataList from "./DataList";
import { ways } from "../data";

const Main = () => {
  return (
    <main>
      <section>
        <h1 className='text-xl font-bold w-32 mx-auto my-6'>Hello world</h1>
        {ways.map((way) => {
          return <DataList {...way} />;
        })}
      </section>
    </main>
  );
};

export default Main;
