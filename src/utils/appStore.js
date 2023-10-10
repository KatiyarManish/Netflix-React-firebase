import { configureStore } from "@reduxjs/toolkit";

import userReduder from "./userSlice";

const appStore = configureStore({
  reducer: { userReduder },
});

export default appStore;
