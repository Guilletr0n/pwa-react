import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { TripEnvisions } from '../../enums';
import { Envision } from '../types';

export interface TripEnvisionState {
  value: Array<Envision>
}

const initialState: TripEnvisionState = {
  value: Object.values(TripEnvisions).map((e)=>{return({label:e, value: false})})
}

export const envisionSlice = createSlice({
  name: 'envision',
  initialState,
  reducers: {
    updateEnvision: (state, action: PayloadAction<Envision[]>) => {
      state.value = action.payload;
    }
  }
})

export const { updateEnvision } = envisionSlice.actions;

export const selectTripEnvision = (state: RootState) => state.tripEnvision.value;

export default envisionSlice.reducer;
