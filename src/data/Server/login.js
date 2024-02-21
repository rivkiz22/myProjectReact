import DataStore from "../store/loginStore";
export const CheckLogin=async(name,password)=>{
    try{
const response=await fetch('http://localhost:8787/login',{
  method:'post',
  body:JSON.stringify({name,password}),
  headers:{
    "Content-Type":"application/json"
  }
})
if(response.status===200){
  DataStore.setIsLogin(true);
  return 0;

}
else{
  return 1;

}
    }
    catch(error){
return"serverError"
    }
  }
  