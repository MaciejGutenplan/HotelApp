import React from 'react';
import {HotelsTable} from "./hotel/components/HotelsTable";
import {CitiesTable} from "./city/components/CitiesTable";
import {CountriesTable} from "./country/components/CountriesTable";

export const Home = () => {
    return(
        <>
            <HotelsTable />
            <br />
            <CitiesTable />
            <br />
            <CountriesTable />
        </>
    )
}