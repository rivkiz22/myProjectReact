import swal from "sweetalert";

export const error = (massage) => {
  swal("", massage, "error", {
    button: false,
    timer: 2000,
  });
}
export const onSubmit = (obj) => {
  const p = checkPhone(obj.clientPhone)
  const e = checkEmail(obj.clientEmail)
  const d=getMeetingColor(obj.dateTime)
  console.log(obj.dateTime);
  { !e ? error("מייל לא תקין") : "" }
  { !p ? error("מספר טלפון לא תקין") : "" }
  { !d ? error("התאריך עבר, בחר תאריך אחר") : "" }
  if (e &&p&&d) {
    return true
  }
  return false
}

const getMeetingColor = (dateTime) => {
  const today = new Date();
  const d=new Date(dateTime);
  if (today > d) {
   return false
  }
  return true
}

const checkPhone = (phone) => {
  return phone.length === 10
}
const checkEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
}





