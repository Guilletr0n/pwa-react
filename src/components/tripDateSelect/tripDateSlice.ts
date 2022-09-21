import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface tripDateState {
  value: Date
}

const initialState: tripDateState = {
  value: new Date()
}

export const tripDateSlice = createSlice({
  name: 'tripDate',
  initialState,
  reducers: {
    updateDate: (state, action: PayloadAction<tripDateState>) => 
      state = action.payload
  }
})

export const { updateDate } = tripDateSlice.actions;

export const selectDate = (state: RootState) => state.tripDate.value;

export default tripDateSlice.reducer;