import { createSlice } from "@reduxjs/toolkit";

const UserNameSlice = createSlice({
  name: "user",
  initialState: {
    userName: "Sanket",
  },
  reducers: {
    changeName: (state) => {
      state.name = "Sanket Potle";
    },
  },
});

export const { changeName } = UserNameSlice.actions;
export default UserNameSlice.reducer;
