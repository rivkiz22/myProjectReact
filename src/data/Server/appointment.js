
import appointmentStore from "../store/appointmentStore";
import axios from "axios"
export async function getappointments() {
    try{
        const response  = await axios.get('http://localhost:8787/appointments');
   const appointment = response.data;
   appointmentStore.setAppointments(appointment)
    }
   catch{
   return"serverError"
   }
}
export const addAppointment=async(appointment)=>{
    try{
const response=await fetch('http://localhost:8787/appointment',{
  method:'post',
  body:JSON.stringify(appointment),
  headers:{
    "Content-Type":"application/json"
  }
})
if(response.status===200){
console.log(appointment);
  appointmentStore.addAppointment(appointment)
return true

}
else{
return false
}
    }
    catch(error){
return"serverError"
    }
  }