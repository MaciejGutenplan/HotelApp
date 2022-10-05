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