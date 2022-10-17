import React from 'react'
import { AppBar, Box, Grid, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { DetailsPanelProps } from "Country/types";
import { browserDetailPanelStyle, smallPhoneDetailsPanelStyle } from "Country/styles";
import { detailsPanelCloseButton, detailsPanelContainer } from "Common/styles";
import useWindow from "Hooks/useWindow";
import store from "Store/store";
import { unsetRecord } from "Store/common/actions";

export const DetailsPanel = ({ country }: DetailsPanelProps) => {
    const { width } = useWindow();

    const panelStyle = width > 425 ? browserDetailPanelStyle  : smallPhoneDetailsPanelStyle

    return(
        <Box sx={detailsPanelContainer}>
            <AppBar position="static" sx={panelStyle} >
                <Grid container spacing={2} sx={{ padding: '10px' }}>
                    <Grid item xs={2}>
                        <b>NAME: </b>
                        <span>{country.name}</span>
                    </Grid>
                    <Grid item xs>
                        <IconButton sx={detailsPanelCloseButton} onClick={() => store.dispatch(unsetRecord())}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    )
}