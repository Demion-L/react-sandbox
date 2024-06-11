import React from "react";

const DataList = ({ title, description }) => {
  return (
    <ul>
      <li>
        <p className='flex flex-col  m-2 p-2 border border-slate-400 rounded'>
          <h3 className='font-bold'>{title}</h3> {description}
        </p>
      </li>
    </ul>
  );
};

export default DataList;
