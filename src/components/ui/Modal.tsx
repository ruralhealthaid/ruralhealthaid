import React, { FC, Fragment, MouseEventHandler, ReactNode } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props: { onClose: MouseEventHandler<HTMLDivElement> }) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays")!;

const Modal: FC<{
  children: ReactNode;
  onClose: MouseEventHandler<HTMLDivElement>;
}> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
