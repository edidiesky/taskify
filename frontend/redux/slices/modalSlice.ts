import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  savedRooms: [],
  loginmodal: false,
  registermodal: false,
  deleteTaskmodal: false,
  isTaskModalOpen: false,
  workspaceid: null,
  workspaceUserid: null,
  taskId: null,
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    onLoginModal: (state, _action) => {
      state.loginmodal = true;
    },
    offLoginModal: (state, _action) => {
      state.loginmodal = false;
    },

    onRegisterModal: (state, _action) => {
      state.registermodal = true;
      document.body.classList.add("modal-open");
    },
    offRegisterModal: (state, _action) => {
      state.registermodal = false;
      document.body.classList.remove("modal-open");
    },

    onDeleteTaskModal: (state, _action) => {
      state.deleteTaskmodal = true;
    },
    offDeleteTaskModal: (state, _action) => {
      state.deleteTaskmodal = false;
    },

    onTaskModal: (state, action) => {
      state.isTaskModalOpen = true;
      state.taskId = action.payload;
    },
    offTaskModal: (state, _action) => {
      state.isTaskModalOpen = false;
      state.taskId = null;
    },
  },
});

export const {
  onLoginModal,
  offLoginModal,
  onRegisterModal,
  offRegisterModal,
  onDeleteTaskModal,
  offDeleteTaskModal,
  onTaskModal,
  offTaskModal,
} = modalSlice.actions;

export default modalSlice.reducer;
