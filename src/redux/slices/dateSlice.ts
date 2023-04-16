import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IDate {
  time: string;
  date: string;
}

const initialState: IDate = {
  time: "",
  date: "",
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    changeDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    changeTime: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
  },
});

export const { changeDate, changeTime } = dateSlice.actions;
export default dateSlice.reducer;
