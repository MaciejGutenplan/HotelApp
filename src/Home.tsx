import React from 'react';
import { HotelsTable } from "Hotel/components/HotelsTable";
import { CitiesTable } from "City/components/CitiesTable";
import { CountriesTable } from "Country/components/CountriesTable";

export const Home = () => {
    return(
        <>
            <HotelsTable />
            <CitiesTable />
            <CountriesTable />
        </>
    )
}