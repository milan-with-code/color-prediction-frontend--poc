import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedOption: null,
};

const bettingOptionsSlice = createSlice({
  name: 'bettingOptions',
  initialState,
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

export const {setSelectedOption} = bettingOptionsSlice.actions;
export default bettingOptionsSlice.reducer;
