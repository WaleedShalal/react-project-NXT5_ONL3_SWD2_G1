import { combineSlices } from "@reduxjs/toolkit";

import { counterSlice } from "./counterSlice/counterSlice";
import { productsSlice } from "./productsSlice/productsSlice";

const rootReducer = combineSlices(counterSlice, productsSlice);

export default rootReducer;
