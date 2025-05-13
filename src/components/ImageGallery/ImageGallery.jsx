import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";
import { useModal } from "../ModalProvider/ModalProvider";

const ImageGallery = ({ hits }) => {
  const { setSelectedImage } = useModal();

  return (
    <ul className={style.imgList}>
      {hits.map((img) => {
        const { id, alt_description, urls } = img;
        return (
          <ImageCard
            onClick={() =>{console.log(img); setSelectedImage(img)}}
            objImg={img}
            key={id}
            image={urls.small}
            alt={alt_description}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
