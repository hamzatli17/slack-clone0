import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  roomId: 0,
};
export const incrementAsync = createAsyncThunk();
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    enterRoom :(state,action) => {
      state.roomId =action.payload.roomId;
    }
  },
});
export const { enterRoom} = appSlice.actions;
export const selectRoomId = state => state.app.roomId;
export default appSlice.reducer;
