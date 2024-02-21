import React, { useState } from 'react';
import { observer } from "mobx-react"
import { useEffect } from "react";
import businessStore from "../../data/store/businessStore"
import { getBusiness } from "../../data/Server/business"

import EditBusinessData from './EditBusinessData';
import loginStore from '../../data/store/loginStore';
import "../css/all.css"
import "../css/business.css"
const BusinessData = (observer(() => {
const[stutus,setStutus]=useState(false)
  useEffect(() => {
    getBusiness();
  setStutus(loginStore.isLogin) 
  }, [])
  return (
    <>
   <div className="container">
 
     <div className="business">
        <div >
          <h5>קוד:</h5>
          <p>{businessStore.business.id}</p>
        </div>
        <div >
          <h5>שם:</h5>
          <p>{businessStore.business.name}</p>
        </div>        
        <div >
          <h5>כתובת:</h5>
          <p>{businessStore.business.address}</p>
        </div>        
        <div >
          <h5>טלפון:</h5>
          <p>{businessStore.business.phone}</p>
        </div>   
        <div >
          <h5>תיאור:</h5>
          <p>{businessStore.business.description}</p>
        </div>
        <div >
          <h5>שם המטפלת:</h5>
          <p>{businessStore.business.owner}</p>
        </div>
</div>


<div>
<img src={businessStore.business.logo}
    alt="logo" 
     />
     </div>
     <div className='edit'>{stutus?<EditBusinessData/>:""}</div>
     </div>
    </>

  )
}))

export default BusinessData