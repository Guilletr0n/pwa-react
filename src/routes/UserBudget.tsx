import { useState, ChangeEvent } from "react";
import NavButton from "../components/buttons/NavButton";
import BudgetSelect from "../components/budgetSelect/budgetSelect";
import DatePicker from "react-datepicker";

export default function UserBudget() {

  const [startDate, setStartDate] = useState(new Date());
  function handleDateChange(date:Date) {
    setStartDate(date);
  }


  return (
    <main className="main-selection-layout">
      <h2 className="title">What is your budget?</h2>
      <BudgetSelect />
      <h2 className="title">So, when shall we go?</h2>
      <div className="centered-layout">
        <DatePicker selected={startDate} onChange={handleDateChange} />
      </div>
      
      <footer>
        <NavButton link="/envision" label="Envision" direction="back"/>
        <NavButton link="/results" label="Results" />
      </footer>
    </main>
  )
}