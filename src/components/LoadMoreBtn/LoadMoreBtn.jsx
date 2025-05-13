import React from "react";
import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={style.btn} onClick={onClick}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
