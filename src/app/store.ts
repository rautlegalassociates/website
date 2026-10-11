import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../services/api';
import appointmentReducer from '../features/appointments/appointmentSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    appointmentUi: appointmentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
