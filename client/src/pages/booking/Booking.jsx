import { useEffect, useState } from "react";
import { DayPicker, useInput } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { Row, Col, Container } from "react-bootstrap";
import Game from "../../components/Game";
import axios from "axios";

const BaseURL="http://localhost:3000/booking"
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
  const [token,setToken]=useState(localStorage.getItem('token'));
  console.log(token);
  const handleGameSubmit = (title) => {
    setEvent(title);
  };
  const[postObject,setPostObject]=useState([
    {
      token:token,
      date:"",
      game:""
    }
  ]);
  const [data,setData] = useState(null);
 
  //to check if it works! yes. yahan pe axios ka get request daalna hai
  useEffect(() => {
    if(selectedDay){
      setPostObject({
        token : token,
        date: selectedDay.toLocaleDateString("en-us"),
        game: event
      })
    }
    
  }, [selectedDay, event]);
  useEffect(()=>{
    console.log(postObject)
    if(postObject.date&&postObject.game){
      axios.post(`${BaseURL}/`,postObject)
        .catch((err)=>{
          console.log(err);
        })
        .then((res)=>{
          console.log(res.data.data);
          setData(res.data.data);
        })
    }
  },[postObject])
  // array storing all time slots (24)
  const [slots,setSlots] = useState([
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
    if(data)
    {
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
  function handleButton1Click(t)
  {
    setTimeSlot(t);
    setTable("1");
  }
  function handleButton2Click(t)
  {
    setTimeSlot(t);
    setTable("2");
  }

  function handleSubmitButtonClick()
  {
    console.log(timeSlot, table, event , selectedDay.toLocaleDateString("en-us"));
  }
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
      {event && <p>you chose {event}</p>}
      <p>enter date</p>
      {/* <input value={selectedDay} onChange={(e)=>{setSelectedDay(e.target.value)}}></input> */}
      {/* <form onSubmit={(e) => {
        setSelectedDay(e.target.value)}}>
        <input value={selectedDay}></input>
        <button type="submit">confirm date</button>
      </form> */}
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
                    {(
                      <div className="d-flex flex-row">
                        <p>{slot.timeSlot}</p>
                        <button className={slot.table1Status} onClick={() => handleButton1Click(slot.timeSlot)} key={slot.id * 10}>
                          {slot.table1Status}
                        </button>
                        <button className={slot.table2Status} onClick={() => handleButton2Click(slot.timeSlot)} key={slot.id * 20}>
                        {slot.table2Status}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* <Calendar onChange={onChange} value={value} (locale, date) => formatDate(date, 'd')/> */}
      <button type="submit" onClick={handleSubmitButtonClick}>Continue to payment!</button>
    </div>
  );
};

export default Booking;
