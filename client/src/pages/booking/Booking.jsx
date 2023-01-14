import { useEffect, useState } from "react";
import { DayPicker, useInput } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Slots from "../../components/Slots";

const Booking = () => {
    const [date, setDate] = useState(null);
    const [data,setData]= useState(null);
    const handleDateSubmit = (e) => {
        e.preventDefault();
        setDate(inputProps.value);
    };
    const { inputProps, dayPickerProps } = useInput({
        defaultSelected: new Date(),
        fromYear: 2023,
        toYear: 2026,
        format: "PP",
        required: true,
    });
    const footer = (
    <form onSubmit={handleDateSubmit}>
        <label>
        <input
            {...inputProps}
            className="input-reset pa2 ma2 bg-white black ba"
        />
        </label>
        <button type="submit">submit</button>
    </form>
    );
    useEffect(()=>{
        setData(
            [
                {id:2,timeSlot:"10:30",date:"22 jan,2020",game:"pool",tableNumber:1},
                {id:5,timeSlot:"12:00",date:"22 jan,2020",game:"pool",tableNumber:2},
                {id:6,timeSlot:"12:30",date:"22 jan,2020",game:"pool",tableNumber:1},
            ]
        )
    },[])
    return ( 
        <div className="d-flex flex-row justify-content-center align-content-center">
            <p>choose date</p>
            <DayPicker {...dayPickerProps} footer={footer} />
            {data&&<Slots props={data}></Slots>}
        </div>
    );
    
}
 
export default Booking;