import { configureStore } from "@reduxjs/toolkit";
import tutorialSlice from "./slices/tutorials";


const store=configureStore({
    reducer:{
        tutorial:tutorialSlice
    },
    devTools:true
})

export default store;