import { useSelector } from "react-redux";

import { City } from "City/types";
import { Country } from "Country/types";
import { RootState } from "../store";
import { populateCity } from "../common/helpers";

export const addCity = (payload: City) => {
    return {
        type: "city/add",
        payload
    }
}

export const editCity = (payload: City) => {
    return {
        type: "city/edit",
        payload
    }
}

export const citiesWithRelations = () => useSelector((state: RootState) => {
    const tmpCities = [...state.cities]

    return tmpCities.reduce((result, city) => {

        // Fetch country data
        const country = state.countries.find((country) => country.id === Number(city.countryId)) || <Country>{}

        const item = populateCity(city, country)

        return [...result, item]
    }, [])
})