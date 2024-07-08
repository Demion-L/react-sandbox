import React from "react";

const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
    <div className='m-2 border border-stone-400 rounded divide-y divide-solid hover:divide-dashed cursor-pointer'>
      <h3 className='p-3 ' onClick={onClick}>
        {title}
      </h3>
      <div className={`p-2 max-h-72 overflow-auto ${isActive ? "active" : ""}`}>
        {isActive && <p>{content}</p>}
      </div>
    </div>
  );
};

export default AccordionItem;
