import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

export default configureStore({
  reducer: {
    //객체 형태의 인자에는 reducer가 있어야 한다.
    todo: todoSlice,
  },
});
