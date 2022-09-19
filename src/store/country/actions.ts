import { Country } from "Country/types";

export const addCountry = (payload: Country) => {
    return {
        type: "country/add",
        payload
    }
}

export const editCountry = (payload: Country) => {
    return {
        type: "country/edit",
        payload
    }
}