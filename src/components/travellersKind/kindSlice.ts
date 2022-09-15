import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { TravellersKind } from '../../enums';

const initialState: string = TravellersKind.SINGLE

export const kindSlice = createSlice({
  name: 'kind',
  initialState,
  reducers: {
    updateKind: (state, action: PayloadAction<string>) =>
      state = action.payload
  }
})

export const { updateKind } = kindSlice.actions;

export const selectKind = (state: RootState) => state.travellerKind;

export default kindSlice.reducer;