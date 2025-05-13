import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <ModalContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
