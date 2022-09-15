import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { TripExperiences } from '../../enums';
import { Experience } from '../types';

export interface TripExperienceState {
  value: Array<Experience>
}

const initialState: TripExperienceState = {
  value: Object.values(TripExperiences).map((e)=>{return({label:e, value: false})})
}


export const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {
    updateExperience: (state, action: PayloadAction<Experience[]>) => {
      state.value = action.payload;
    }
  }
})

export const { updateExperience } = experienceSlice.actions;

export const selectTripExperience = (state: RootState) => state.tripExperience.value;

export default experienceSlice.reducer;
