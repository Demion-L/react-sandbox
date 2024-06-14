import React from "react";
import { useState, useEffect } from "react";
import { months, weekdays } from "../constants";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const showTime = () => {
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    return `${padZero(h)}h: ${padZero(m)}m: ${padZero(s)}s`;
  };

  let dayOfWeek = weekdays[time.getDay()];
  let dayOfMonth = time.getDate();
  let currentMonth = months[time.getMonth()];

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  return (
    <div>
      <div className='flex flex-col content-center items-center px-4'>
        <div className='flex flex-col mb-2 items-center'>
          <span className='text-lg font-sans italic font-bold'>
            {dayOfWeek}
          </span>
          <span>
            {dayOfMonth}-th of {currentMonth}
          </span>
        </div>
        <div className='font-mono ordinal text-2xl'>{showTime()}</div>
      </div>
    </div>
  );
};

export default Clock;
