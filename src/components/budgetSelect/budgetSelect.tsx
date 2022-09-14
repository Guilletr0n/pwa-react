//import { useState } from "react";
import { SyntheticEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { updateBudget, selectBudget } from "./budgetSlice";
import { BudgetAmounts } from '../../enums';

export default function BudgetSelect() {
  const budget = useAppSelector(selectBudget)
  const disptach = useAppDispatch();

  const budgetAmountsLabels: string[] = Object.values(BudgetAmounts)

  const handleChange = (evt:SyntheticEvent) => {
    disptach(updateBudget((evt.target as HTMLInputElement).value))
  };

  return (
    <section className="checks-layout">
        <form>
      <ul className="check-list">
          {budgetAmountsLabels.map((i) =>
            <li key={i}
              className="inputXL">
              <input
                id={i}
                type="radio"
                name="budget"
                checked = {budget === i}
                onChange={handleChange}
                value={i}/>
                <label htmlFor={i}>{i}</label>
            </li>
          )}
      </ul>
        </form>
    </section>
  )
}