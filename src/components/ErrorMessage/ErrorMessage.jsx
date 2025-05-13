import React from "react";
import style from "./ErrorMessage.module.css";

const ErrorMessage = ({ textError }) => {
  return <h2 className={style.errorText}>{textError}</h2>;
};

export default ErrorMessage;
