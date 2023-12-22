import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './reducers/locationReducer';

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
