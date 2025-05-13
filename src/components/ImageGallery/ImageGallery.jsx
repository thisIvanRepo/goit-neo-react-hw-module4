import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ hits }) => {
  return (
    <ul className={style.imgList}>
      {hits.map((img) => {
        const { id, alt_description, urls } = img;
        return (
          <ImageCard
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
