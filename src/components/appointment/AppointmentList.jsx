import { observer } from "mobx-react"
import { getappointments } from "../../data/Server/appointment"
import { useEffect, useState } from "react"
import appointmentStore from "../../data/store/appointmentStore"
import Appointment from "./Appointment"
import "../css/appointment.css"
import "../css/all.css"
import "../css/appointment&service.css"
const AppointmentList = (observer(() => {
  useEffect(() => {
    getappointments()
  }, [])
  const getMeetingColor = (dateTime) => {
    const today = new Date();
    const meetingDate = new Date(dateTime);
    const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (diffDays === 1) {
        return 'red';
      }
      else {
        if (diffDays <= 7) {
          return 'orange';
        }
        else {
          return 'green'
        }
      }
  }
  let color = ["red", "orange", "green"]
  return (
    <>

      <div className="all-grid">
        {color.map((_, ib) => (
          <div className="grid-container" key={ib}>
         {  appointmentStore.appointments.filter((x) =>
              (getMeetingColor(x.dateTime) === color[ib]))
              .map((t) => (
                <div>                
                  <Appointment key={t} index={t} divColor={color[ib]} />
                </div>
              ))
            }
          </div>
        ))}
      </div>
    </>
  )
}))

export default AppointmentList