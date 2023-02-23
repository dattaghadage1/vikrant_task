import { configureStore } from "@reduxjs/toolkit";
import INCREMENT from './Reducers/reducer'
const store=configureStore({
   reducer:{
    INC:INCREMENT
   }
})
export default store