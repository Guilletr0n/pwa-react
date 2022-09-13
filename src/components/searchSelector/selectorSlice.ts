import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface PreferenceState {
  value: String
}

const initialState: PreferenceState = {
  value: 'Paris'
}

export const destinationSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    updateDestination: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
})

export const { updateDestination } = destinationSlice.actions;

export const selectDestination = (state: RootState) => state.destination.value;

export default destinationSlice.reducer;