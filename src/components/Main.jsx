import React from "react";
import DataList from "./DataList";
import { ways } from "../data";
import Button from "../ui/Button";
import Asaid from "./Asaid/Asaid";

const Main = () => {
  return (
    <main className='grid grid-cols-6 gap-4 h-fit'>
      <Asaid />
      <section className='col-start-5 col-end-7'>
        <h1 className='text-xl font-bold w-32 mx-auto my-6'>Hello world</h1>
        {ways.map((way) => (
          <DataList {...way} />
        ))}
        <Button />
      </section>
    </main>
  );
};

export default Main;
