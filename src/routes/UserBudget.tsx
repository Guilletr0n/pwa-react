import NavButton from "../components/buttons/NavButton";
import BudgetSelect from "../components/budgetSelect/budgetSelect";
import TripDateSelect from "../components/tripDateSelect/TripDateSelect";

export default function UserBudget() {

  return (
    <main className="main-selection-layout">
      <h2 className="title">What is your budget?</h2>
      <BudgetSelect />
      <h2 className="title">So, when shall we go?</h2>
      <div className="centered-layout">
        <TripDateSelect />
      </div>
      
      <footer>
        <NavButton link="/envision" label="Envision" direction="back"/>
        <NavButton link="/results" label="Results" />
      </footer>
    </main>
  )
}