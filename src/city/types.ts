import React, { SetStateAction } from "react";

import { Country } from "Country/types";

export type City = {
    id: number | null;
    name: string;
    countryId: number;
}

export type PopulatedCity = {
    id: number | null;
    name: string;
    country: Country;
}

export type CityModalProps = {
    record: PopulatedCity,
    open: boolean,
    handleClose: () => any
}

export type CityTableProps = {
    setDetailsPanel: React.Dispatch<SetStateAction<React.ReactNode>>;
}

export type DetailsPanelProps = {
    city: PopulatedCity;
    setDetailsPanel: React.Dispatch<SetStateAction<React.ReactNode | null>>
}