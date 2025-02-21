"use client"
import React from 'react';
import { AnimatePresence } from "framer-motion";
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';
import { useSelector } from 'react-redux'

const ModalProvider = () => {
    const {
        loginmodal,
        registermodal,
        deletemessagemodal,
        groupnamemodal,
        addgroupmembersmodal,
        channelmodal,
        deletechannelmodal,
        deleteworkspacemodal
    } = useSelector((store: { modal?: any }) => store.modal);

    return (
        <>
            {/* animating the login modal */}
            <AnimatePresence mode='wait' >
                {loginmodal && <LoginModal />}
            </AnimatePresence>
            {/* animating the register modal */}
            <AnimatePresence mode='wait' >
                {registermodal && <RegisterModal />}
            </AnimatePresence>
      
        </>
    );
}


export default ModalProvider;