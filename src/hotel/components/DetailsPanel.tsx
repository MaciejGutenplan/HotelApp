import React from 'react'
import { AppBar, Box, Grid, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import { DetailsPanelProps } from "Hotel/types";
import { browserDetailPanelStyle, smallPhoneDetailsPanelStyle } from "Hotel/styles";
import { detailsPanelCloseButton, detailsPanelContainer } from "Common/styles";
import useWindow from "Hooks/useWindow";

export const DetailsPanel = ({ hotel, setDetailsPanel }: DetailsPanelProps) => {
    const { width } = useWindow();

    const panelStyle = width > 425 ? browserDetailPanelStyle  : smallPhoneDetailsPanelStyle

    return(
        <Box sx={detailsPanelContainer}>
            <AppBar position="static" sx={panelStyle} >
                <Grid container spacing={2} sx={{ padding: '10px' }}>
                    <Grid item xs={2}>
                        <b>NAME: </b>
                        <span>{hotel.name}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <b>ADDRESS: </b>
                        <span>{hotel.address}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <b>PRICE: </b>
                        <span>{hotel.price}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <b>CITY: </b>
                        <span>{hotel.city.name}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <b>COUNTRY: </b>
                        <span>{hotel.country.name}</span>
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