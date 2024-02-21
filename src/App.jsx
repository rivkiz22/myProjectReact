
import BusinessData from "../src/components/businessData/BusinessData"
import ServiceList from "./components/service/ServiceList"
import "./App.css"
function App() {
  return (
    <>
      <div className="contain">
        <BusinessData></BusinessData>
      </div>
      <ServiceList></ServiceList>
    </>
  )
}

export default App

