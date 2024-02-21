import { observer } from "mobx-react"

import "../css/appointment.css"
import "../css/all.css"
import "../css/appointment&service.css"

const Appointment=observer(({index,divColor})=> {
const date=(newDate)=>{
    var date = new Date(newDate);
    return(
    date.getFullYear() + " " +
    (date.getMonth() + 1) + "/" +
    date.getDate() + "  " +

    date.getHours() + ":" +
    date.getMinutes() + ":" +
    date.getSeconds() );
}
    return (
      <>
  <div className="grid-container-2">
  <div className={divColor}></div>
    <div className="grid-item">
          <h5>שם:</h5>
          <p>{index.clientName}</p>
        </div>

        <div className="grid-item ">
          <h5>תיאור:</h5>
          <p>{index.serviceDescription}</p>
        </div>

        <div className="grid-item ">
          <h5>מחיר:</h5>
          <p>{index.servicePrice}</p>
        </div>

        <div className="grid-item ">
          <h5>תאריך:</h5>
          <p>
            {date(index.dateTime)}</p>
        </div>

        <div className="grid-item ">
          <h5>טלפון:</h5>
          <p>{index.clientPhone}</p>
        </div>

        <div className="grid-item ">
          <h5>מייל:</h5>
          <p>{index.clientEmail}</p>
        </div>
        </div>
      </>
    )
  }
)
  
  export default Appointment