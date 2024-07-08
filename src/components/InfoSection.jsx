import React, { useState } from "react";
import Accordion from "../ui/Accordion/Accordion";
import Button from "../ui/Button";

import { ways, differences } from "../data";

const InfoSection = () => {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }
  return (
    <section className='col-start-5 col-end-7'>
      <h1 className='text-xl font-bold w-32 mx-auto my-6'>Hello world</h1>
      <Accordion items={ways} />
      <div className='flex'>
        <Button onClick={() => handleClick("way")}>Click me 1</Button>
        <Button onClick={() => handleClick("easy")}>Click me 2</Button>
        <Button onClick={() => handleClick("program")}>Click me 3</Button>
      </div>
      <p className='m-2 p-2 min-h-20 text-wrap border border-stone-400 rounded break-words'>
        {differences[contentType]}
      </p>
    </section>
  );
};

export default InfoSection;
