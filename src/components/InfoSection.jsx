import React, { useState } from "react";
import Accordion from "../ui/Accordion/Accordion";
import Button from "../ui/Button";

import { ways, differences, infoSectionButtonData } from "../data";

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
        {infoSectionButtonData.map((button) => (
          <Button
            key={button.value}
            isActive={contentType === button.value}
            onClick={() => handleClick(button.value)}>
            {button.text}
          </Button>
        ))}
      </div>
      {contentType ? (
        <p className='m-2 p-2 backdrop-blur selection: min-h-20 text-wrap border border-stone-400 rounded break-words'>
          {differences[contentType]}
        </p>
      ) : (
        <div className='m-2 p-2 backdrop-blur text-wrap border border-stone-400 rounded break-words'>
          Press the button!
        </div>
      )}
    </section>
  );
};

export default InfoSection;
