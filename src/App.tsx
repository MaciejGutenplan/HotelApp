import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import { ErrorBoundary } from 'react-error-boundary'

import { HotelsForm as AddHotelForm } from "./hotel/components/HotelsForm";
import { CountriesForm as AddCountryForm } from "./country/components/CountriesForm";
import { CitiesForm as AddCityForm } from "./city/components/CitiesForm";

import { Home } from "./Home";
import { Navigation } from "./Navigation";
import { NotFound } from "./NotFound";
import store from "./store/store";
import { ADD_CITY_FORM, ADD_COUNTRY_FORM, ADD_HOTEL_FORM, HOME_PAGE } from "./constants/routes";
import { ErrorBoundary as ErrorFallback } from "./ErrorBoundary";

const App = () => {
  return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Provider store={store}>
          <Router>

          <Navigation />

          <Routes>
            <Route path={HOME_PAGE} element={<Home />} />
            <Route path={ADD_HOTEL_FORM} element={<AddHotelForm />} />
            <Route path={ADD_CITY_FORM} element={<AddCityForm />} />
            <Route path={ADD_COUNTRY_FORM} element={<AddCountryForm />} />
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Router>
      </Provider>
    </ErrorBoundary>
  )
};

export default App;
