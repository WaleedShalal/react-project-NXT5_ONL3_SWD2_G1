import { Container } from "react-bootstrap";

import classes from "./TheFooter.module.css";

function TheFooter(props) {
  return (
    <footer className={classes.hamada}>
      <Container>
        <p className="text-center">react project copyrights</p>
      </Container>
      {props.from && <p>This component is child to {props.from}</p>}
      {props.children}
      {props.myTag && props.myTag}
    </footer>
  );
}

export default TheFooter;
