import { observer } from "mobx-react-lite";
import serviseStore from "../../data/store/serviseStore";
import "../css/service.css"
import "../css/appointment&service.css"
const Service = (observer(({ index }) => {
  return (
    <>
      <div className="grid-container-2">
        <div className="grid-item ">
          <h5>שם:</h5>
          <p>{serviseStore.services[index].name}</p>
        </div>

        <div className="grid-item ">
          <h5> קוד:</h5>
          <p>{serviseStore.services[index].id}</p>
        </div>

        <div className="grid-item ">
          <h5>תיאור:</h5>
          <p> {serviseStore.services[index].description}</p>
        </div>

        <div className="grid-item ">
          <h5>מחיר:</h5>
          <p>{serviseStore.services[index].price}</p>
        </div>

        <div className="grid-item ">
          <h5>למשך:</h5>
          <p>{serviseStore.services[index].duration}</p>
        </div>
      </div>
    </>

  )
})

)


export default Service