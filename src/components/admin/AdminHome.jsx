import { observer } from "mobx-react"
import { useState } from "react";

import BusinessData from "../businessData/BusinessData"
import ServiceList from "../service/ServiceList";
import AppointmentList from "../appointment/AppointmentList";
import "../../App.css"

const AdminHome=(observer(()=> {
  const[service,setService]=useState(true)
  const[appointment,setAppointment]=useState(false)
  const update=(s,a)=>{
    setService(s)
   setAppointment(a)
  }
  return (
      <>
        <div className="contain ">
    <BusinessData></BusinessData>
    </div>

   <button className={ `${service} btn` }onClick={() => update(true,false)}>שירותים</button>
   <button className={ `${appointment} btn` }onClick={() => update(false,true)}>פגישות</button>
  
 {service?<ServiceList ></ServiceList> :
<AppointmentList></AppointmentList>}


      </>
  )
}
))
export default AdminHome