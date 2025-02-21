import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  savedRooms: [],
  loginmodal: false,
  registermodal: false,
  isdeleteTaskmodal: false,
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

    onDeleteTaskModal: (state, action) => {
      state.isdeleteTaskmodal = true;
      state.taskId = action.payload;
    },
    offDeleteTaskModal: (state, _action) => {
      state.isdeleteTaskmodal = false;
      state.taskId = null;
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
