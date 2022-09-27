import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const Navigation = () => {
    return(
        <Box sx={{ flexGrow: 1, paddingBottom: '10px' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        className='nav-bar-title'
                    >Hotel App </Typography>

                    <Button variant="outlined" style={{ color: "white" }} startIcon={<AddCircleIcon />} href="/add-hotel" >Hotel</Button>
                    <Button variant="outlined" style={{ color: "white" }} startIcon={<AddCircleIcon />} href="/add-city" >City</Button>
                    <Button variant="outlined" style={{ color: "white" }} startIcon={<AddCircleIcon />} href="/add-country" >Country</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}