import React from "react";

const TickCoin = ({ w = "137", h = "20" }) => {
  return (
    <svg height="20" width="100">
      <text x="0" y="15" fill="white" fontSize="18" fontWeight="600">
        Tick
      </text>
    </svg>
  );
};

export default TickCoin;
