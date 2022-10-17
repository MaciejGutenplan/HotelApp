import React, { Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import { ErrorBoundary } from 'react-error-boundary'
import { ThemeProvider, createTheme, Paper } from "@mui/material";

import { HotelsForm as AddHotelForm } from "./hotel/components/HotelsForm";
import { CountriesForm as AddCountryForm } from "./country/components/CountriesForm";
import { CitiesForm as AddCityForm } from "./city/components/CitiesForm";

import { Home } from "./Home";
import { Navigation } from "./Navigation";
import { NotFound } from "./NotFound";
import store from "./store/store";
import { ADD_CITY_FORM, ADD_COUNTRY_FORM, ADD_HOTEL_FORM, HOME_PAGE } from "./constants/routes";
import { ErrorBoundary as ErrorFallback } from "./ErrorBoundary";
import ProtectedRoute from "./ProtectedRoute";
import Loader from "Common/Loader";

const App = () => {
  const storageTheme = localStorage.getItem("appTheme");
  const [mode, setMode] = useState(storageTheme === null ? "light" : JSON.parse(storageTheme).mode)
  const theme = createTheme({ palette: { mode } });

  return (
      <ThemeProvider theme={theme} >
        <Suspense fallback={<Loader />}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Provider store={store}>
              <Router>
                <Paper sx={{ height: '100%', minHeight: '100vh' }}>
                  <Navigation setMode={setMode}/>

                  <Routes>
                    <Route path={HOME_PAGE} element={ <ProtectedRoute isAllowed={true}> <Home /> </ProtectedRoute>} />
                    <Route path={ADD_HOTEL_FORM} element={ <ProtectedRoute isAllowed={true}> <AddHotelForm /> </ProtectedRoute>} />
                    <Route path={ADD_CITY_FORM} element={ <ProtectedRoute isAllowed={true}> <AddCityForm /> </ProtectedRoute>} />
                    <Route path={ADD_COUNTRY_FORM} element={ <ProtectedRoute isAllowed={true}> <AddCountryForm /> </ProtectedRoute>} />
                    <Route path="*" element={<NotFound />}/>
                  </Routes>
                </Paper>
              </Router>
            </Provider>
          </ErrorBoundary>
        </Suspense>
      </ThemeProvider>
  )
};

export default App;
