import { useAppSelector, useAppDispatch } from "../../hooks";
import DatePicker from "react-datepicker";
import { selectDate, updateDate } from "./tripDateSlice";

export default function TripDateSelect () {

  const date = useAppSelector(selectDate);
  const dispatch = useAppDispatch();

 console.log('date:'+date)
 console.log( date.getDate() + " " + date.getMonth() + " " + date.getFullYear())

  function handleDateChange(evtDate:Date) {
    dispatch(updateDate({value:evtDate}))
    console.log('update:' + evtDate)
  }

  return (
    <div>
      <DatePicker
         dateFormat="dd/MM/yyyy"
         selected={new Date(date)}
         onChange={handleDateChange} />
    </div>
  )
}