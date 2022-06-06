import React from "react";
import "./tooltip.css";

const TooltipCustom = ({ text = "basic text", left, top }) => {
  return (
    <div className="tooltip" style={{ left, top }}>
      <p>{text}</p>
    </div>
  );
};

export default TooltipCustom;
