import axios from 'axios';
import serviseStore from '../store/serviseStore';

export async function getServices() {
    const response  = await axios.get('http://localhost:8787/services');
    const services = response.data;
    serviseStore.setServices(services);
}


export const addService=async(servise)=>{
    try{
const response=await fetch('http://localhost:8787/service',{
  method:'post',
  body:JSON.stringify(servise),
  headers:{
    "Content-Type":"application/json"
  }
})
if(response.status===200){
  serviseStore.addService(servise);
  return "good"
}
else{
return"error";

}
    }
    catch(error){
return "serverError"
    }
  }



