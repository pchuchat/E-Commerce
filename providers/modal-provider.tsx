"use client"

import {useEffect,useState} from "react";


import { StoreModal } from "@/components/modals/store-modal";


export const ModalProvider = () => {
    const [isMounted, setMounted] = useState(false);


    useEffect (() => {
        setMounted(true);
    }, []);


    if (!isMounted) {
        return null;
    }

    return (
        <>
         <StoreModal />
        </>
    );
};