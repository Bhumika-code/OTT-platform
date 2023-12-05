import React from "react";
import gif from "../assets/images/ZKZx.gif";
const SVGLoader: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width="50"
    height="50"
    preserveAspectRatio="xMidYMid"
    display="block"
  >
    <circle
      cx="25"
      cy="25"
      fill="none"
      stroke="#0074d9"
      strokeWidth="5"
      r="20"
      strokeDasharray="113.09733552923255 37.69911184307752"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        keyTimes="0;1"
        values="0 25 25;360 25 25"
      />
    </circle>
  </svg>
  // <img src={gif} className="gif-loader" alt="" />
);

export default SVGLoader;
