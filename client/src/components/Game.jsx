import { forwardRef } from "react";
import Card from "react-bootstrap/Card";
import "../css/Game.css";
export default function Game(props) {

  return (
      <div onClick={props.onGameClick} className={props.active ? "selected" : "unselected"}>
      <Card style={{ width: "15rem"}}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
    </div>
  );
}