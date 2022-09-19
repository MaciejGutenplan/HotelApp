import React from 'react';
import { Box, Modal } from "@mui/material";

import { modalStyle } from "./styles";
import { ModalProps } from "./types";

export const GeneralModal = (props: ModalProps) => {

    const { open, handleClose, children } = props

    return(
        <Modal open={open} onClose={() => handleClose()} >
            <Box sx={modalStyle}>
                { children }
            </Box>
        </Modal>
    )
}