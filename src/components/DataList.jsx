import React from "react";

const DataList = ({ title, description }) => {
  return (
    <ul>
      <li>
        <p className='m-2 p-2 border border-slate-400 rounded'>
          <strong>{title}</strong> {description}
        </p>
      </li>
    </ul>
  );
};

export default DataList;
