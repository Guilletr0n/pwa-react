import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { BudgetAmounts } from '../../enums';

const initialState: string = 'Dont know'

export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    updateBudget: (state, action: PayloadAction<string>) =>
      state = action.payload
  }
})

export const { updateBudget } = budgetSlice.actions;

export const selectBudget = (state: RootState) => state.budget;

export default budgetSlice.reducer;