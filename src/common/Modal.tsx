import React from 'react';
import { Box, Modal as MUIModal } from "@mui/material";

import { modalStyle } from "./styles";
import { ModalProps } from "./types";

export const Modal = (props: ModalProps) => {

    const { open, handleClose, children } = props

    return(
        <MUIModal open={open} onClose={() => handleClose()} >
            <Box sx={modalStyle}>
                { children }
            </Box>
        </MUIModal>
    )
}