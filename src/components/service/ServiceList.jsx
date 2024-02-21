import { observer } from "mobx-react"
import { useEffect, useState } from "react";
import serviseStore from "../../data/store/serviseStore"
import { getServices } from "../../data/Server/servise";
import Service from "./Service";
import "../css/service.css"
import "../css/all.css"
import "../css/appointment&service.css"
import AddService from "./AddService";
import loginStore from "../../data/store/loginStore";
import AddAppointment from "../appointment/addApointment/AddAppointment";
const ServiceList = (observer(() => {
const [stutus,  setStutus ]=useState(false)
  useEffect(() => {
    getServices()
    setStutus(loginStore.isLogin) 
  }, [])

  
  return (
    <>
    <div className="all-grid">
      <div className="grid-container">
        {serviseStore.services.map((_, index) => (
          <Service key={index} index={index} />
        ))}
       {stutus?<AddService></AddService>:<AddAppointment></AddAppointment>}
      </div>
     
      </div>
    </>
  )
}))
export default ServiceList