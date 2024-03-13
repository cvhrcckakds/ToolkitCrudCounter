//configureStore- createStore farkı
// 1- Thunk kurulu gelir
// 2- verilen reducerları otomatik olarak birleştirir.

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import crudSlice from "./slices/crudSlice";


export default configureStore ({
    reducer: { counterSlice, crudSlice},
});