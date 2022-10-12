import React, {useState} from 'react';
import { HotelsTable } from "Hotel/components/HotelsTable";
import { CitiesTable } from "City/components/CitiesTable";
import { CountriesTable } from "Country/components/CountriesTable";

export const Home = () => {
    const [detailsPanel, setDetailsPanel] = useState<React.ReactNode | null>(null)

    return(
        <>
            <HotelsTable setDetailsPanel={setDetailsPanel} />
            <CitiesTable setDetailsPanel={setDetailsPanel} />
            <CountriesTable setDetailsPanel={setDetailsPanel} />
            { detailsPanel }
        </>
    )
}