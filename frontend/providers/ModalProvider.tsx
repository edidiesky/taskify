"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import TaskManagementModal from "@/components/modals/TaskManagementModal";
import { useSelector } from "react-redux";
import { DeleteConfirmationModal } from "@/components/modals/DeleteConfirmationModal";

const ModalProvider = () => {
  const { loginmodal, registermodal, isTaskModalOpen, isdeleteTaskmodal } =
    useSelector((store: { modal?: any }) => store.modal);

  return (
    <>
      {/* animating the login modal */}
      <AnimatePresence mode="wait">
        {loginmodal && <LoginModal />}
      </AnimatePresence>
      {/* animating the register modal */}
      <AnimatePresence mode="wait">
        {registermodal && <RegisterModal />}
      </AnimatePresence>
      {/* animating the task management modal */}

      <AnimatePresence mode="wait">
        {isTaskModalOpen && <TaskManagementModal />}
      </AnimatePresence>

      {/* animating the delete confirmation modal */}
      <AnimatePresence mode="wait">
        {isdeleteTaskmodal && <DeleteConfirmationModal />}
      </AnimatePresence>
    </>
  );
};

export default ModalProvider;
