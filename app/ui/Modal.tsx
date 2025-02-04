// import { FC, Fragment, MouseEventHandler, ReactNode } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";
import {
  Fragment,
  useEffect,
  useState,
  type FC,
  type MouseEventHandler,
  type ReactNode,
} from "react";
import type { Route } from "../+types/root";

// export async function clientLoader() {
//   const portalElement = document.getElementById("overlays")!;
//   return portalElement;
// }
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

// const portalElement = document.getElementById("overlays")!;

const Modal: FC<{
  children: ReactNode;
  onClose: MouseEventHandler<HTMLDivElement>;
}> = (props) => {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    console.log(typeof document);
    if (typeof document !== "undefined")
      setPortalElement(document.getElementById("overlays"));
  }, []);

  if (!portalElement) return <p>Failed to load Modal</p>;

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
