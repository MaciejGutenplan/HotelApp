import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { AddForm as AddHotel } from "./hotel/components/AddForm";
import { AddForm as AddCountry } from "./country/components/AddForm";
import { AddForm as AddCity } from "./city/components/AddForm";

import { Home } from "./Home";

const App = () => {
  return (
    <Router>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-hotel" element={<AddHotel />} />
        <Route path="/add-city" element={<AddCity />} />
        <Route path="/add-country" element={<AddCountry />} />
        <Route path="*" element={<>NOT FOUND</>}/>
      </Routes>
    </Router>
  )
};

export default App;
