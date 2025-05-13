import React from "react";
import Modal from "react-modal";
import { useModal } from "../ModalProvider/ModalProvider";
import style from "./Image.module.css";

Modal.setAppElement("#root");

const ImageModal = () => {
  const { selectedImage, setSelectedImage } = useModal();

  if (!selectedImage) return null;
  console.log(selectedImage);

  return (
    <Modal
      className={style.modal}
      isOpen={selectedImage ? true : false}
      onRequestClose={() => {
        setSelectedImage(null);
      }}
    >
      <div className={style.modalImgWrapper}>
        <img
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
        />
        <div className={style.informationImg}>
          <p>Likes: {selectedImage.likes || 'not defined'}</p>
          <p>Author: {selectedImage.user.name || 'not defined'}</p>
          <p>In instagram: @{selectedImage.user.instagram_username || 'not defined'}</p>
          <p>Location: {selectedImage.user.location || 'not defined'}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
