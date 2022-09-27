import React from 'react';
import { Box, Modal } from "@mui/material";

import { modalStyle } from "./styles";
import { ModalProps } from "./types";

export const EditModal = (props: ModalProps) => {

    return(
        <Modal
            open={props.open}
            onClose={() => props.handleClose()}
        >
            <Box sx={modalStyle}>

            </Box>
        </Modal>
    )
}