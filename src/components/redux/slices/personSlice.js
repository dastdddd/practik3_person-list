import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("practik-person")) || [],
  person:  {},
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action) => {
      const newList = {
        id: Date.now(),
        ...action.payload,
      };
      state.list = [newList, ...state.list];
    },
    removeList: (state) => {
      state.list = [];
    },
    changePerson: (state, action) => {
      const newItem = state.list.find((item) => item.id === action.payload);
      state.person = { ...newItem };
    },
  },
});

export const { addPerson, removeList, changePerson } = personSlice.actions;

export default personSlice.reducer;
