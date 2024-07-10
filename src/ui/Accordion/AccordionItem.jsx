import React from "react";

const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
    <div className='m-2 border border-stone-400 rounded divide-y divide-solid hover:divide-dashed cursor-pointer'>
      <div className='flex justify-between items-center'>
        <div className='p-3 ' onClick={onClick}>
          {title}
        </div>
        <svg
          className='fill-sky-600 shrink-0 mx-8'
          width='16'
          height='16'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`transform origin-center transition duration-200 ease-out ${
              isActive && "!rotate-180"
            }`}
          />
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isActive && "!rotate-180"
            }`}
          />
        </svg>
      </div>
      <div
        className={`p-2 max-h-72 overflow-auto ${
          isActive ? "bg-sky-600" : ""
        }`}>
        {isActive && <p>{content}</p>}
      </div>
    </div>
  );
};

export default AccordionItem;
