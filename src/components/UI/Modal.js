import React from "react";
import ReactDOM from "react-dom";

import style from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClose}></div>;
};
const Overlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
