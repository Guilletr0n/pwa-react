import React from "react";
import NavButton from "../components/buttons/NavButton";
import BudgetSelect from "../components/budgetSelect/budgetSelect";

export default function UserBudget() {
  return (
    <main className="main-selection-layout">
      <h2 className="title">What is your budget?</h2>
      <BudgetSelect />
      <footer>
        <NavButton link="/envision" label="Envision" direction="back"/>
        <NavButton link="/preferences" label="Preferences" />
      </footer>
    </main>
  )
}