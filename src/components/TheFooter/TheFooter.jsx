import { lazy, Suspense, useState } from "react";
import { Button, Container } from "react-bootstrap";

// import UserModal from "../UserModal/UserModal";
import classes from "./TheFooter.module.css";
import { createPortal } from "react-dom";

const UserModal = lazy(() => import("../UserModal/UserModal"));

function TheFooter(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer className={classes.hamada}>
      <Container>
        <p className="text-center">react project copyrights</p>
      </Container>
      {props.from && <p>This component is child to {props.from}</p>}
      {props.children}
      {props.myTag && props.myTag}
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Suspense fallback={<div>Loading ...</div>}>
        <UserModal show={show} handleClose={handleClose} />
      </Suspense>

      {createPortal(
        <p>Lorem ipsum dolor sit amet.</p>,
        document.getElementById("root-two")
      )}
    </footer>
  );
}

export default TheFooter;
