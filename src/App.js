import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { AddForm as AddHotel } from "./hotel/components/AddForm";
import { AddForm as AddCountry } from "./country/components/AddForm";
import { AddForm as AddCity } from "./city/components/AddForm";

import { Home } from "./Home";
import { Navigation } from "./Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />

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
