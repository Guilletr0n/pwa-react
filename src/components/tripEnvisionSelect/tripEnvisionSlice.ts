import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { TripEnvisions } from '../../enums';
import { Envision } from '../types';

export interface TripEnvisionState {
  value: Array<Envision>
}

const initialState: TripEnvisionState = {
  value: [
    {label: TripEnvisions.BEACH, value: false},
    {label: TripEnvisions.CITY_CRUISING, value: false},
    {label: TripEnvisions.CULTURAL_EXPERIENCE, value: false},
    {label: TripEnvisions.DOING_BUSINESS, value: false},
    {label: TripEnvisions.NATURE_EXPLORATION, value: false},
    {label: TripEnvisions.PARTY, value: false},
    {label: TripEnvisions.ROMANCE, value: false},
    {label: TripEnvisions.SPORT_ACTIVITY, value: false},
    {label: TripEnvisions.WELLNESS_AND_RELAXATION, value: false},
    {label: TripEnvisions.WORK_REMOTELY, value: false}
  ]
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
