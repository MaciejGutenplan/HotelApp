import React from 'react';
import { Link as RouterLink } from "react-router-dom";
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
                        component={RouterLink}
                        to='/'
                        className='nav-bar-title'
                    >Hotel App </Typography>

                    <Button variant="outlined" style={{ color: "white" }} startIcon={<AddCircleIcon />} component={RouterLink} to="/add-hotel" >Hotel</Button>
                    <Button variant="outlined" style={{ color: "white" }} startIcon={<AddCircleIcon />} component={RouterLink} to="/add-city" >City</Button>
                    <Button variant="outlined" style={{ color: "white" }} startIcon={<AddCircleIcon />} component={RouterLink} to="/add-country" >Country</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}