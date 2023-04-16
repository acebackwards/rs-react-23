import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface searchCard {
  searchValue: string;
}

const initialState: searchCard = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'searchCard',
  initialState,
  reducers: {
    newSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: {},
});

export default searchSlice.reducer;
