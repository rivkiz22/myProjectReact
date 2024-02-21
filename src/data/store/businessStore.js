import { observable, makeObservable, action } from "mobx";
import a from "../img/logo3.jpg"
class BusinessStore {
    business = {
    }
    defultbusiness = {
        id: "123",
        name: "הנפש שלך",
        address: "הנרקיס 8",
        phone: "0556766682",
        owner: "רבקה קלאר",
        logo: a,
        description: "מטפלת רגשית",
    }

    constructor() {
        makeObservable(this, {
            business: observable,
            setBusiness: action,
            addBusiness: action
        })

    }
    setBusiness = (business) => {
        if (Object.keys(business).length === 0 && business.constructor === Object){  
            this.business = this.defultbusiness
       
        }    
        else {
            this.business ={ ...business}
        }
    }

    addBusiness = (business) => {
        this.business=business
    }
    checkBusiness=(business)=>{
       
        {
            business.id == "" ?
            business.id =this.business.id :
            ""
        }
        {
            business.name == "" ?
           business.name =this.business.name :
            ""
        }
        {
            business.address== "" ?
            business.address =this.business.address :
            ""
        }
        {
             business.phone == "" ?
           business.phone = this.business.phone :
            ""
        }
    
        {
          business.owner == "" ?
           business.owner = this.business.owner :
            ""
        }
    
        {
           business.logo == "" ?
           business.logo =this.business.logo :
            ""
        }
        {
          business.description == "" ?
          business.description = this.business.description :
            ""
        }
        return business
    }
}
export default new BusinessStore();