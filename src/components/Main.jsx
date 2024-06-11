import React from "react";
import DataList from "./DataList";
import { ways } from "../data";
import Button from "../ui/Button";
import Asaid from "./Asaid";

const Main = () => {
  return (
    <main className='flex'>
      <Asaid />
      <section>
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