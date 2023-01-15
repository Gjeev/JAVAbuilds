import { useEffect, useState } from "react";
import { DayPicker, useInput } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { Row, Col, Container } from "react-bootstrap";
import Game from "../../components/Game";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

const BaseURL = "http://localhost:3000/booking";
const Booking = () => {
  // state for date
  const [selectedDay, setSelectedDay] = useState("");
  // let selectedDate = moment(yourDate).toDate();
  const { inputProps, dayPickerProps } = useInput({
    defaultSelected: new Date(),
    fromYear: 2023,
    toYear: 2026,
    format: "dd-MM-y",
    required: true,
  });
  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, "y-MM-dd")}.</p>
  ) : (
    <p>Please pick a day.</p>
  );
  // let date = format(selectedDay, "y-MM-dd");
  // console.log(date);
  // game array for display game options
  const games = [
    { id: 1, title: "pool", src: "images/pool.jpg" },
    { id: 2, title: "Play Station", src: "images/ps.jpg" },
    { id: 3, title: "Snooker", src: "images/snooker.jpg" },
  ];
  // state for game and its handler function
  const [event, setEvent] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [enrollnum, setEnrollnum] = useState(localStorage.getItem("enrollnum"));
  const handleGameSubmit = (title) => {
    setEvent(title);
  };
  const [postObject, setPostObject] = useState([
    {
      token: token,
      date: "",
      game: "",
    },
  ]);
  const [data, setData] = useState(null);

  //to check if it works! yes. yahan pe axios ka get request daalna hai
  useEffect(() => {
    if (selectedDay) {
      setPostObject({
        token: token,
        date: selectedDay.toLocaleDateString("en-us"),
        game: event,
      });
    }
  }, [selectedDay, event]);
  useEffect(() => {
    console.log(postObject);
    if (postObject.date && postObject.game) {
      axios
        .post(`${BaseURL}/`, postObject)
        .catch((err) => {
          console.log(err);
        })
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
        });
    }
  }, [postObject]);
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

  // this updates slots available whenever state from backend changes
  const updateSlots = () => {
    if (data) {
      const newData = slots.map((slot) => {
        let tempSlot = slot;
        data.forEach((flag) => {
          if (slot.timeSlot === flag.time && flag.table === "1") {
            tempSlot.table1Status = "invisible";
          }
          if (slot.timeSlot === flag.time && flag.table === "2") {
            tempSlot.table2Status = "invisible";
          }
        });
        return tempSlot;
      });
      setSlots(newData);
    }
  };

  //time slot jo user choose karega uska state or table ka state & function
  const [timeSlot, setTimeSlot] = useState("");
  const [table, setTable] = useState("");
  function handleButton1Click(t) {
    setTimeSlot(t);
    setTable("1");
  }
  function handleButton2Click(t) {
    setTimeSlot(t);
    setTable("2");
  }

  function handleSubmitButtonClick() {
    // const user = useSelector((state) => state.user);

    // console.log(timeSlot, table, event , selectedDay);
    // axios.post("http://localhost:3000/user/smthsmth", {

    // })

    var rand =Math.floor((Math.random() * 10000) + 100000)
    console.log(timeSlot, table, event , selectedDay.toLocaleDateString("en-us"),enrollnum,rand);
    axios.post(`${BaseURL}/create-checkout-session`,{
      enrollnum:enrollnum,
      date:selectedDay.toLocaleDateString("en-us"),
      time:timeSlot,
      game:event,
      table:table,
      bookInfo:`${selectedDay.toLocaleDateString("en-us")}+&+${timeSlot}+&+${event}+&+${table}`,
      code: rand
    })
    .catch((err)=>{
      console.log(err);
    })
    .then((res)=>{
      console.log(res)
      if(res.data.url){
        window.location.href=res.data.url
      }
    })


  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Container>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h2>Choose your game</h2>
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
              </Container>
              {event && <p>you chose {event}</p>}
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h2>Choose your date</h2>
              
            </Accordion.Header>
            <Accordion.Body>
            <p>please click on the update slots button after you select your date!</p>
              <div className="d-flex flex-row justify-content-center align-content-center">
                <DayPicker
                  mode="single"
                  selected={selectedDay}
                  onSelect={setSelectedDay}
                  footer={footer}
                />
                <div className="bookingComponent">
                  <button onClick={updateSlots}>to update slots</button>
                  <div>
                    {data &&
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
                                  key={slot.id * 10}
                                >
                                  {slot.table1Status}
                                </button>
                                <button
                                  className={slot.table2Status}
                                  onClick={() =>
                                    handleButton2Click(slot.timeSlot)
                                  }
                                  key={slot.id * 20}
                                >
                                  {slot.table2Status}
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

      {/* <Calendar onChange={onChange} value={value} (locale, date) => formatDate(date, 'd')/> */}
      <Button variant="success" onClick={handleSubmitButtonClick} className="submitButton">
        Continue to payment!
      </Button>
    </div>
  );
};

export default Booking;
