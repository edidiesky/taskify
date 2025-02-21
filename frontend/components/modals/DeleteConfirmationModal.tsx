"use client";

import Modal from "../Layout/modal";
export const DeleteConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  userName,
  deleteisloading,
}:{
  isOpen:(val:any)=> void,
  onClose:(val:any)=> void,
  onConfirm:(val:any)=> void,
  userName:string,
  deleteisloading:boolean,
}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Confirm Deletion">
      <div className="py-2 px-4">
        <h3 className="text-2xl font-nueubig">
          Are you sure you want to delete {userName}?
        </h3>
        <p className="text-base text-gray-500 mt-1">
          This action cannot be undone.
        </p>
      </div>
      <div className="flex px-6 pt-4 text-sm border-t w-full justify-end space-x-3 mt-4">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          disabled={deleteisloading}
          onClick={onConfirm}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          {deleteisloading ? "Deleting in progress..." : "Delete"}
        </button>
      </div>
    </Modal>
  );
};
