import "../../css/DashBoard.css";
import { Button, Alert } from "react-bootstrap";
import { useState } from "react";

export default function DashBoard()
{
    const [bookings, setBookings] = useState([]);
    // useEffect(() => {

    // },[]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>Welcome to Bookio :)</h1>
          <div className="user-border d-flex flex-column">
            <h1>Your Bookings</h1>
            <div className="booking">
              <h3>Event | Date | Time</h3>
              <Alert variant="success">
                Your booking has been confirmed! chill.
              </Alert>
            </div>
    
            
          </div>
          <Button variant="primary" href="/bookings">
              Make a new booking
            </Button>
        </div>
      );
}