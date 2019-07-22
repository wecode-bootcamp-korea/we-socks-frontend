import React from "react";

const SquareTwo = ({ imgSrc, alt, title }) => {
  return (
    <div className="footerItem">
      <h2>
        <img src={imgSrc} sizes="35px" height="35" alt={alt} />
      </h2>
      <h2>{title}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam
        optio laborum minus debitis libero non
      </p>
    </div>
  );
};

export default SquareTwo;
