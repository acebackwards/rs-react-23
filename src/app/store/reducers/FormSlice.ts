import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFormCard, IFormCardList } from '../../models/IFormCard';

const initialState: IFormCardList = {
  formCardList: [],
};

export const formSlice = createSlice({
  name: 'searchCard',
  initialState,
  reducers: {
    addFormCard(state, action: PayloadAction<IFormCard>) {
      state.formCardList.push(action.payload);
    },
  },
  extraReducers: {},
});

export const { addFormCard } = formSlice.actions;

export default formSlice.reducer;
