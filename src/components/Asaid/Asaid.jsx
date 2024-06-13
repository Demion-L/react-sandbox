import React from "react";
import "./Asaid.css";

const Asaid = () => {
  return (
    <ul className='honeycomb col-start-1 col-end-3'>
      <li className='honeycomb-cell'>
        <img src='/tiles/1.jpg' alt='' className='honeycomb-cell_img' />
        <div className='honeycomb-cell_title'>Web Development 1</div>
      </li>
      <li className='honeycomb-cell'>
        <img src='/tiles/2.jpg' alt='' className='honeycomb-cell_img' />
        <div className='honeycomb-cell_title'>Web Development 2</div>
      </li>
      <li className='honeycomb-cell'>
        <img src='/tiles/3.jpg' alt='' className='honeycomb-cell_img' />
        <div className='honeycomb-cell_title'>Web Development 3</div>
      </li>
      <li className='honeycomb-cell'>
        <img src='/tiles/4.jpg' alt='' className='honeycomb-cell_img' />
        <div className='honeycomb-cell_title'>Web Development 4</div>
      </li>
      <li className='honeycomb-cell'>
        <img src='/tiles/5.jpg' alt='' className='honeycomb-cell_img' />
        <div className='honeycomb-cell_title'>Web Development 5</div>
      </li>
      <li className='honeycomb-cell'>
        <img src='/tiles/6.jpg' alt='' className='honeycomb-cell_img' />
        <div className='honeycomb-cell_title'>Web Development 6</div>
      </li>
      <li className='honeycomb-cell'>
        <img src='/tiles/7.jpg' alt='' className='honeycomb-cell_img' />
        <div className='honeycomb-cell_title'>Web Development 7</div>
      </li>
      <li className='honeycomb-cell honeycomb-hidden'></li>
    </ul>
  );
};

export default Asaid;
