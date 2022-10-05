import { Country } from "Country/types";

export const InitialFormState = {
    id: null,
    name: ''
}

export const createInitialModalState = (country: Country) => ({
    id: country.id,
    name: country.name
})