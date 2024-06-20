import React from "react";

const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
    <div className='border border-stone-400'>
      <h3 className='accordion-title' onClick={onClick}>
        {title}
      </h3>
      <div className={`accordion-content ${isActive ? "active" : ""}`}>
        {isActive && <p>{content}</p>}
      </div>
    </div>
  );
};

export default AccordionItem;
