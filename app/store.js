import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./features/productSlice";

export let store = configureStore({
    reducer: {
        product: ProductSlice.reducer   
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ["user/login"],
            ignoredPaths: ["user.user"],
          },
        }),
});
