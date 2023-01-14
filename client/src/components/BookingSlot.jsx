import { useEffect, useReducer, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const BookingSlot = (props) => {
    console.log(props);
    const location = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();
    const [time, setTime] = useState(props.props.timeSlot);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")));
      }, [location]);
      //console.log(user.enrollnum);
    const [event,setEvent] = useState(props.event);
    const [date,setDate] = useState(props.date);
    const [bookingData, setBookingData] = useState();
    const [table, setTable] = useState();
    useEffect(()=>{
        setEvent(props.event);
    },[])
    useEffect(()=>{
        console.log(event);
    },[event])
    function handleButton1Click() 
    {
        setBookingData({enrollnum: user.enrollnum,
            date: date,
            time: time,
            game: event,
            table: "table 1",
            code: Math.floor(Math.random() * 1000000)
        })
    }
    function handleButton2Click() 
    {
        setBookingData({enrollnum: user.enrollnum,
            date: date,
            time: time,
            game: event,
            table: "table 2",
            code: Math.floor(Math.random() * 1000000)
        })

    }
    const [slot,setSlot]=useState(null)
    useEffect(()=>{
        setSlot(props.props);
        //console.log(date, time , event , table);
        
    },[]);
    useEffect(()=>{
        console.log(bookingData);
    },[bookingData])
    //console.log(bookingData);
    return ( 
        <div>
            {slot&&
                <div className="d-flex flex-row">
                    <p>{slot.timeSlot}</p>
                    <button className={slot.table1Status} onClick={() => handleButton1Click(slot)}>Book Table 1</button>
                    <button className={slot.table2Status} onClick={() => handleButton2Click(slot)}>Book Table 2</button>
                </div>
            }
        </div>
    );
}
 
export default BookingSlot;