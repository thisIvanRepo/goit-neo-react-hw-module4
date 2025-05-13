import React from "react";
import style from "./ImageCard.module.css";

const ImageCard = ({ image, alt, onClick }) => {
  return (
    <>
      <li>
        <div onClick={onClick} className={style.imgWraper}>
          <img src={image} alt={alt} />
        </div>
      </li>
    </>
  );
};

export default ImageCard;
