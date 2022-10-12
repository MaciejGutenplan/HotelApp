import React from 'react'
import { AppBar, Box, Grid, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { DetailsPanelProps } from "City/types";
import { browserDetailPanelStyle, smallPhoneDetailsPanelStyle } from "City/styles";
import { detailsPanelCloseButton, detailsPanelContainer } from "Common/styles";
import useWindow from "Hooks/useWindow";

export const DetailsPanel = ({ city, setDetailsPanel }: DetailsPanelProps) => {
    const { width } = useWindow();

    const panelStyle = width > 425 ? browserDetailPanelStyle  : smallPhoneDetailsPanelStyle

    return(
        <Box sx={detailsPanelContainer}>
            <AppBar position="static" sx={panelStyle}>
                <Grid container spacing={2} sx={{ padding: '10px' }}>
                    <Grid item xs={2}>
                        <b>NAME: </b>
                        <span>{city.name}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <b>COUNTRY: </b>
                        <span>{city.country.name}</span>
                    </Grid>
                    <Grid item xs>
                        <IconButton sx={detailsPanelCloseButton} onClick={() => setDetailsPanel(null)}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </AppBar>
        </Box>
    )
}