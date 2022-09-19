import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";

import { HotelsForm as AddHotel } from "./hotel/components/HotelsForm";
import { CountriesForm as AddCountry } from "./country/components/CountriesForm";
import { CitiesForm as AddCity } from "./city/components/CitiesForm";

import { Home } from "./Home";
import { Navigation } from "./Navigation";
import store from "./store/store";

const App = () => {
  return (
      <Provider store={store}>
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
      </Provider>
  )
};

export default App;
