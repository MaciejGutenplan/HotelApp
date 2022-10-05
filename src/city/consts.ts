import { PopulatedCity } from "City/types";

export const InitialFormState = {
    id: null,
    name: '',
    country: null
}

export const createInitialModalState = (city: PopulatedCity) => ({
    id: city.id,
    name: city.name,
    country: city.country.id
})