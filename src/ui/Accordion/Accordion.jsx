import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='accordion'>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.description}
          isActive={index === activeIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
