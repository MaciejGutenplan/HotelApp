import React from 'react';
import { Box, Modal, Typography } from "@mui/material";

import { HotelModalProps } from "../types";
import { modalStyle } from "../styles";

export const EditModal = (props: HotelModalProps) => {

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