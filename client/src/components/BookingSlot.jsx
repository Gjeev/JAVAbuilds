import { useEffect, useState } from "react";

const BookingSlot = (props) => {
    console.log(props)
    const [slot,setSlot]=useState(null)
    useEffect(()=>{
        setSlot(props.props)
    },[])
    return ( 
        <div>
            {slot&&
                <div className="d-flex flex-row">
                    <p>{slot.timeSlot}</p>
                    <button className={slot.table1Status}>Book Table 1</button>
                    <button className={slot.table2Status}>Book Table 2</button>
                </div>
            }
        </div>
    );
}
 
export default BookingSlot;