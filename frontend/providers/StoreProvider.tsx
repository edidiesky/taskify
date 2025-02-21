"use client"
import { store } from '@/redux/store';
import React from 'react';
import { Provider } from 'react-redux'
import ToastProvider from './ToastProvider';
import ModalProvider from './ModalProvider';
const ModalContextLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Fragment>
            <ToastProvider />
            <ModalProvider />
            {children}
        </React.Fragment>
    )
}
export default function ProviderLayout({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ModalContextLayout>
                {children}
            </ModalContextLayout>
        </Provider>
    );
}
