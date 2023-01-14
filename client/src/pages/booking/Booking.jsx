import { useEffect, useState } from "react";
import { DayPicker, useInput } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import Slots from "../../components/Slots";
import { Row, Col, Container } from "react-bootstrap";
import Game from "../../components/Game";

const Booking = () => {
  const [selectedDay, setSelectedDay] = useState();

  const games = [
    { id: 1, title: "Pool", src: "images/pool.jpg" },
    { id: 2, title: "Play Station", src: "images/ps.jpg" },
    { id: 3, title: "Snooker", src: "images/snooker.jpg" },
  ];
  const data = [
    {
      id: 2,
      timeSlot: "10:30",
      date: "22 jan,2020",
      game: "pool",
      tableNumber: 1,
    },
    {
      id: 5,
      timeSlot: "12:00",
      date: "22 jan,2020",
      game: "pool",
      tableNumber: 2,
    },
    {
      id: 6,
      timeSlot: "12:30",
      date: "22 jan,2020",
      game: "pool",
      tableNumber: 1,
    },
  ];
  const [event, setEvent] = useState();
  // const [date, setData] = useState();

  const handleGameSubmit = (title) => {
    setEvent(title);
  };
  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    fromYear: 2023,
    toYear: 2026,
    format: "PP",
    required: true,
  });
  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, "PPP")}.</p>
  ) : (
    <p>Please pick a day.</p>
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
        <DayPicker
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}
          footer={footer}
        />
        {data && <Slots props={data} event={event} date={selectedDay}></Slots>}
      </div>
    </div>
  );
};

export default Booking;
