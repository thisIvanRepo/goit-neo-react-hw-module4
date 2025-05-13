import React from "react";
import style from "./ImageCard.module.css";
import { useModal } from "../ModalProvider/ModalProvider";

const ImageCard = ({ image, alt, objImg }) => {
  const { setSelectedImage } = useModal();
  return (
    <>
      <li>
        <div
          className={style.imgWraper}
          onClick={() => setSelectedImage(objImg)}
        >
          <img src={image} alt={alt} />
        </div>
      </li>
    </>
  );
};

export default ImageCard;
