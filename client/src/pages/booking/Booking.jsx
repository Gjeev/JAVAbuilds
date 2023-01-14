import { useEffect, useState } from "react";
import { DayPicker, useInput } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { Row, Col, Container } from "react-bootstrap";
import Game from "../../components/Game";
import "../../css/Booking.css";
import Button from 'react-bootstrap/Button';
import Accordion from "react-bootstrap/Accordion";

const Booking = () => {
  // state for date
  const [selectedDay, setSelectedDay] = useState();
  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    fromYear: 2023,
    toYear: 2026,
    format: "PP",
    required: true,
  });
  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, "dd-MM-y")}.</p>
  ) : (
    <p>Please pick a day.</p>
  );
  // let date = format(selectedDay, "dd-MM-y");
  // console.log(date);

  // game array for display game options
  const games = [
    { id: 1, title: "Pool", src: "images/pool.jpg" },
    { id: 2, title: "Play Station", src: "images/ps.jpg" },
    { id: 3, title: "Snooker", src: "images/snooker.jpg" },
  ];
  // state for game and its handler function
  const [event, setEvent] = useState();
  const handleGameSubmit = (title) => {
    setEvent(title);
  };

  //to check if it works! yes. yahan pe axios ka get request daalna hai
  useEffect(() => {
    if (selectedDay) {
      let d = selectedDay.toLocaleDateString("en-US");
      console.log(d);
    }
  }, [selectedDay, event]);

  // array storing all time slots (24)
  const [slots, setSlots] = useState([
    {
      id: 1,
      timeSlot: "10:00",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 2,
      timeSlot: "10:30",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 3,
      timeSlot: "11:00",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 4,
      timeSlot: "11:30",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 5,
      timeSlot: "12:00",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 6,
      timeSlot: "12:30",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 7,
      timeSlot: "13:00",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 8,
      timeSlot: "13:30",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 9,
      timeSlot: "14:00",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 10,
      timeSlot: "14:30",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 11,
      timeSlot: "15:00",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 12,
      timeSlot: "15:30",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 13,
      timeSlot: "16:00",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 14,
      timeSlot: "16:30",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 15,
      timeSlot: "17:00",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 16,
      timeSlot: "17:30",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 17,
      timeSlot: "18:00",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 18,
      timeSlot: "18:30",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 19,
      timeSlot: "19:00",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 20,
      timeSlot: "19:30",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 21,
      timeSlot: "20:00",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 22,
      timeSlot: "20:30",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 23,
      timeSlot: "21:00",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
    {
      id: 24,
      timeSlot: "21:30",
      table1Status: "visible",
      table2Status: "visible",
      tableNumber: 1,
    },
  ]);

  // data is state for backend se jo bhi aata hai

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
  // this updates slots available whenever state from backend changes
  useEffect(() => {
    if (data) {
      slots.map((slot) => {
        data.map((flag) => {
          if (slot.id === flag.id && flag.tableNumber === 1) {
            slot.table1Status = "invisible";
          }
          if (slot.id === flag.id && flag.tableNumber === 2) {
            slot.table2Status = "invisible";
          }
        });
      });
    }
  }, [data]);

  //time slot jo user choose karega uska state or table ka state & function
  const [timeSlot, setTimeSlot] = useState("");
  const [table, setTable] = useState("");
  function handleButton1Click(t) {
    setTimeSlot(t);
    setTable("table 1");
  }
  function handleButton2Click(t) {
    setTimeSlot(t);
    setTable("table 2");
  }

  function handleSubmitButtonClick() {
    console.log(timeSlot, table, event, selectedDay);
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
    <Container>
    <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h1>Choose your game:</h1>
          </Accordion.Header>
          <Accordion.Body>
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
              {event && <p>you chose {event}</p>}
            </Container>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h1>Choose your date:</h1>
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-row justify-content-center align-content-center">
              <DayPicker
                mode="single"
                selected={selectedDay}
                onSelect={setSelectedDay}
                footer={footer}
              />
              <div className="bookingComponent">
                <div>
                  {event &&
                    selectedDay &&
                    slots.map((slot) => {
                      return (
                        <div key={slot.id}>
                          {
                            <div className="d-flex flex-row">
                              <p>{slot.timeSlot}</p>
                              <button
                                className={slot.table1Status}
                                onClick={() =>
                                  handleButton1Click(slot.timeSlot)
                                }
                              >
                                Book Table 1
                              </button>
                              <button
                                className={slot.table2Status}
                                onClick={() =>
                                  handleButton2Click(slot.timeSlot)
                                }
                              >
                                Book table 2
                              </button>
                            </div>
                          }
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      

    </Container>
      <Button variant="success" onClick={handleSubmitButtonClick}>Continue to payment!</Button>
      {/* <button type="submit" onClick={handleSubmitButtonClick} className="submitButton">
        Continue to payment!
      </button> */}
    </div>
  );
};

export default Booking;
