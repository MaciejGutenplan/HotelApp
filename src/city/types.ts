import { Country } from "Country/types";

export type City = {
    id: number;
    name: string;
    countryId: number;
}

export type PopulatedCity = {
    id: number;
    name: string;
    country: Country;
}

export type CityPayload = {
    name: { value: string }
    country: { value: number }
}

export type CityModalProps = {
    record: PopulatedCity,
    open: boolean,
    handleClose: () => any
}