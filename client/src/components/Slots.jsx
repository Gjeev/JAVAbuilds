import React, { useEffect, useState } from "react";
import BookingSlot from "./BookingSlot";

const Slots = (props) => {
    const [data,setData]=useState(null);
    const [slots1,setSlots1]= useState(
        [
            {id:1,timeSlot:"10:00",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:2,timeSlot:"10:30",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:3,timeSlot:"11:00",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:4,timeSlot:"11:30",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:5,timeSlot:"12:00",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:6,timeSlot:"12:30",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:7,timeSlot:"13:00",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:8,timeSlot:"13:30",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:9,timeSlot:"14:00",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:10,timeSlot:"14:30",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:11,timeSlot:"15:00",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:12,timeSlot:"15:30",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:13,timeSlot:"16:00",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:14,timeSlot:"16:30",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:15,timeSlot:"17:00",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:16,timeSlot:"17:30",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:17,timeSlot:"18:00",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:18,timeSlot:"18:30",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:19,timeSlot:"19:00",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:20,timeSlot:"19:30",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:21,timeSlot:"20:00",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:22,timeSlot:"20:30",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:23,timeSlot:"21:00",table1Status:"visible",table2Status:"visible",tableNumber:1},
            {id:24,timeSlot:"21:30",table1Status:"visible",table2Status:"visible",tableNumber:1},
        ]
    );
    
    useEffect(()=>{
        setData(props.props);
    },[])
    useEffect(()=>{
        if(data){
            slots1.map((slot)=>{
                data.map((flag)=>{
                    if(slot.id===flag.id&&flag.tableNumber===1){
                        slot.table1Status="invisible"
                    }
                    if(slot.id===flag.id&&flag.tableNumber===2){
                        slot.table2Status="invisible"
                    }
                })
            })
        }
    },[data])
    return ( 
        <div className="bookingComponent">
            <div>
                {data&&slots1.map((slot)=>{
                    return(
                        <BookingSlot key={slot.id} props={slot}/>
                    )
                })}
                
            </div>
        </div>
        
    );
}
 
export default Slots;