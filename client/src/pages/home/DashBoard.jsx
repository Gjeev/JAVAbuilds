import "../../css/DashBoard.css";
import { Button, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
const BaseURL = "http://localhost:3000/booking";

export default function DashBoard() {
  const [bookings, setBookings] = useState([]);
  const [enrollnum, setEnrollnum] = useState(localStorage.getItem("enrollnum"));

  useEffect(() => {
    console.log(enrollnum);
    axios
      .post(`${BaseURL}/userevent`, { enrollnum: enrollnum })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        console.log(res.data.data);
        setBookings(res.data.data);
      });
  }, []);
  console.log(bookings);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Welcome to Bookio :)</h1>
      <div className="user-border d-flex flex-column">
        <h1>Your Bookings</h1>
        {bookings.length > 0 ? (
          bookings.map((booking) => {
            return (
              <div className="booking" key={booking._id}>
                <h6>game: {booking.game}</h6>
                <h6>table: {booking.table}</h6>
                <h6>your unique code: {booking.code}</h6>
                <h6>date: {booking.date}</h6>
                <h6>time: {booking.time}</h6>

                <Alert variant="success">
                  Your booking has been confirmed! chill.
                </Alert>
              </div>
            );
          })
        ) : (
          <div className="booking">You have no bookings yet. Make one now!</div>
        )}
      </div>
      <Button variant="primary" href="/bookings">
        Make a new booking
      </Button>
    </div>
  );
}
