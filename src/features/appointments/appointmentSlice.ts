import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppointmentRequest } from "../../types";

interface AppointmentUiState {
  isModalOpen: boolean;
  preselectedCategory: string;
  preselectedLawyer: string;
  lastSubmittedAppointment: AppointmentRequest | null;
}

const initialState: AppointmentUiState = {
  isModalOpen: false,
  preselectedCategory: "",
  preselectedLawyer: "",
  lastSubmittedAppointment: null,
};

export const appointmentSlice = createSlice({
  name: "appointmentUi",
  initialState,
  reducers: {
    openAppointmentModal: (
      state,
      action: PayloadAction<{ category?: string; lawyer?: string } | undefined>,
    ) => {
      state.isModalOpen = true;
      if (action.payload?.category) {
        state.preselectedCategory = action.payload.category;
      }
      if (action.payload?.lawyer) {
        state.preselectedLawyer = action.payload.lawyer;
      }
    },
    closeAppointmentModal: (state) => {
      state.isModalOpen = false;
    },
    setPreselectedCategory: (state, action: PayloadAction<string>) => {
      state.preselectedCategory = action.payload;
    },
    setLastSubmittedAppointment: (
      state,
      action: PayloadAction<AppointmentRequest | null>,
    ) => {
      state.lastSubmittedAppointment = action.payload;
    },
    clearAppointmentSession: (state) => {
      state.preselectedCategory = "";
      state.preselectedLawyer = "";
      state.lastSubmittedAppointment = null;
    },
  },
});

export const {
  openAppointmentModal,
  closeAppointmentModal,
  setPreselectedCategory,
  setLastSubmittedAppointment,
  clearAppointmentSession,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
