import { makeObservable, observable } from "mobx";
import { action } from "mobx";
class appointmentStore{
appointments=[]

inUse=false;

constructor(){
    makeObservable(this,{
        appointments:observable,
        inUse:observable,
        setAppointments:action,
        addAppointment:action
    })
}
setAppointments(appointments){
  this.appointments=appointments
}
addAppointment(appointment){
this.appointments=[...this.appointments,appointment]
}
}
export default new appointmentStore()