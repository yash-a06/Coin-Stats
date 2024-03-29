import { configureStore } from "@reduxjs/toolkit";

import currencySliceReducer from './CurrencySlice.js';
const store = configureStore({
    reducer: {
        currency: currencySliceReducer
    },
    devTools: true
});

export default store;