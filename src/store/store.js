import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
// import counterReducer from "./counterSlice/counterSlice";

export const store = configureStore({
  // reducer:{
  //   counter:counterReducer,
  // },
  reducer: rootReducer,
});
