import { useEffect, useState } from "react";
import { DayPicker, useInput } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Slots from "../../components/Slots";
import { Row, Col, Container } from "react-bootstrap";
import Game from "../../components/Game";

const Booking = () => {
  const games = [
    { id: 1, title: "Pool", src: "images/pool.jpg" },
    { id: 2, title: "Play Station", src: "images/ps.jpg" },
    { id: 3, title: "Snooker", src: "images/snooker.jpg" },
  ];
  const data = [
          { id: 2, timeSlot: "10:30", date: "22 jan,2020", game: "pool" },
          { id: 5, timeSlot: "12:00", date: "22 jan,2020", game: "pool" },
          { id: 6, timeSlot: "12:30", date: "22 jan,2020", game: "pool" },
        ];

  const [bookingData, setBookingData] = useState(
    {
        enrollnum: "",
        game: "",
        date: "",
        table: "",
        starttime: "",
        code: ""
    }
  );
  const [event, setEvent] = useState();

const handleEnrollSubmit = (e) => {
    e.preventDefault();
    setBookingData({...bookingData, enrollnum: e.target.value, code: e.target.value});
}

const handleTableSubmit = (e) => {
    e.preventDefault();
    setBookingData({...bookingData, table: e.target.value});
}

const handleFormSubmit = (e) => {
    e.preventDefault();
    setBookingData({...bookingData, date: e.target.value});
  };

const handleGameSubmit = (title) => {
    setEvent(title);
    setBookingData({...bookingData, game: title});

}
  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    fromYear: 2023,
    toYear: 2026,
    format: "PP",
    required: true,
  });
  const footer = (
    <form onSubmit={handleFormSubmit}>
      <label>
        <input
          {...inputProps}
          className="input-reset pa2 ma2 bg-white black ba"
        />
      </label>
      <button type="submit">submit</button>
    </form>
  );

  return (
    <div className="d-flex flex-column justify-content-center align-content-center">
    <p>choose game</p>
      <Container fluid="sm">
        <Row>
          {games.map((game) => (
            <Col key={game.id}>
              <Game
                active={game.title === event}
                onGameClick={() => handleGameSubmit(game.title)}
                title={game.title}
                src={game.src}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <p>choose date</p>
      <div className="d-flex flex-row justify-content-center align-content-center">
      <DayPicker {...dayPickerProps} footer={footer} />
      {data && <Slots data={data} bookingData={bookingData} handleEnrollSubmit={handleEnrollSubmit} handleTableSubmit={handleTableSubmit} setBookingData={setBookingData}></Slots>}
      </div>
      
    </div>
  );
};

export default Booking;