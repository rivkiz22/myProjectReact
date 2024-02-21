import businessStore from "../store/businessStore"
import axios from "axios"
export async function getBusiness() {
    try{
const response  = await axios.get('http://localhost:8787/businessData');
   const business = response.data;
   businessStore.setBusiness(business)
    }
   catch{
    return"serverError"
   }
  
}
export async function addBusiness(business) {
 let b=  businessStore.checkBusiness(business) ;  
     const res = await axios.post('http://localhost:8787/businessData', b);
    if (res.status === 200) {
         businessStore.addBusiness(res.data);
    }
    else {
        return "error"
    }
}