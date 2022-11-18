import React from "react";

const ClickOutsideOverlay = ({ setState, className, zIndex, func }) => (
  <div
    onClick={() => {
      if (func) func();
      if (setState) setState((prev) => !prev);
    }}
    className={
      className || `fixed w-screen h-screen top-0 left-0 ${zIndex || ""}`
    }
  ></div>
);

export default ClickOutsideOverlay;
