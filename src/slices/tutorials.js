import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import TutorialDataService from "../services/tutorial.service";
const initialState = {
  data: [],
};

const tutorialSlice = createSlice({
  name: "tutorial",
  initialState,
  reducers: {
    createTutorial: (state, action) => {
      console.log(action.payload)
      return { ...state, data: [...state.data, action.payload] };
      
    },
    deleteAllTutorial:(state, action)=>{
      state.data=[];
    }
  },
});

export const { createTutorial,deleteAllTutorial } = tutorialSlice.actions;
export default tutorialSlice.reducer;
