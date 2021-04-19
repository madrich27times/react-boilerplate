import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer.reducers';

const store = configureStore({
    reducer: rootReducer,
});

export default store;
