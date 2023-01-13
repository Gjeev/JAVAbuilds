import "../../css/DashBoard.css";
import { Button, Alert } from "react-bootstrap";

export default function DashBoard()
{
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>Welcome blah</h1>
          <div className="user-border d-flex flex-column">
            <h1>Your Bookings</h1>
            <div className="booking">
              <h3>Event | Date | Time</h3>
              <Alert variant="success">
                Your booking has been confirmed! chill.
              </Alert>
              <Alert variant="danger">GO PAY AGAIN</Alert>
            </div>
    
            <Button variant="primary" href="/booking">
              Book Now
            </Button>
          </div>
        </div>
      );
}