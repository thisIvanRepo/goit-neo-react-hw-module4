import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = ({ color, speed }) => {
  return (
    <BounceLoader
      color={color}
      speedMultiplier={speed}
      cssOverride={{ margin: "20px auto" }}
    />
  );
};

export default Loader;
