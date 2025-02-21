import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  savedRooms: [],
  loginmodal: false,
  registermodal: false,
  groupnamemodal: false,
  addgroupmembersmodal: false,
  deletemessagemodal: false,
  deletechannelmodal: false,
  deleteworkspacemodal: false,
  channelmodal: false,
  workspaceid: null,
  workspaceUserid: null,
  channelid: null,
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
    onGroupNameModal: (state, _action) => {
      state.groupnamemodal = true;
    },
    offGroupNameModal: (state, _action) => {
      state.groupnamemodal = false;
    },
    onCreateChannelModal: (state, action) => {
      state.channelmodal = true;
      state.workspaceid = action.payload.workspaceid;
      state.workspaceUserid = action.payload.workspaceUserid;
    },
    offCreateChannelModal: (state, _action) => {
      state.channelmodal = false;
    },
    onGroupMemberModal: (state, _action) => {
      state.addgroupmembersmodal = true;
    },
    offGroupMemberModal: (state, _action) => {
      state.addgroupmembersmodal = false;
    },
    onDeleteMessageModal: (state, _action) => {
      state.deletemessagemodal = true;
    },
    offDeleteMessageModal: (state, _action) => {
      state.deletemessagemodal = false;
    },

    onDeleteChannelModal: (state, _action) => {
      state.deletechannelmodal = true;
    },
    offDeleteChannelModal: (state, _action) => {
      state.deletechannelmodal = false;
    },

    onDeleteWorkspaceModal: (state, _action) => {
      state.deleteworkspacemodal = true;
    },
    offDeleteWorkspaceModal: (state, _action) => {
      state.deleteworkspacemodal = false;
    },
  },
});

export const {
  onLoginModal,
  offLoginModal,
  onRegisterModal,
  offRegisterModal,
  onGroupNameModal,
  offGroupNameModal,
  onGroupMemberModal,
  offGroupMemberModal,
  onDeleteMessageModal,
  offDeleteMessageModal,
  onCreateChannelModal,
  offCreateChannelModal,
  onDeleteChannelModal,
  offDeleteChannelModal,
  onDeleteWorkspaceModal,
  offDeleteWorkspaceModal,
} = modalSlice.actions;

export default modalSlice.reducer;
