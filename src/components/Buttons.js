import React, { useState } from "react";
import './buttons.css'

export const Buttons = () => {

    const [count, setCount] = useState(0);
    
    const PrevClick = () => {
        setCount(count-1);
      };
    const NextClick = () => {
        setCount(count+1);
      };

  return (
    <>
      <button className="btn prev" onClick={PrevClick}>prev</button>
      <p className="count">{count}</p>
      <button className="btn next" onClick={NextClick}>next</button>
    </>
  );
};