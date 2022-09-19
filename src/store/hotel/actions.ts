import { useSelector } from "react-redux";

import { Hotel } from "Hotel/types";
import { RootState } from "../store";
import { City } from "City/types";
import { Country } from "Country/types";
import { populateHotel } from "../common/helpers";

export const addHotel = (payload: Hotel) => {
    return {
        type: "hotel/add",
        payload
    }
}

export const editHotel = (payload: Hotel) => {
    return {
        type: "hotel/edit",
        payload
    }
}

export const hotelsWithRelations = () => useSelector((state: RootState) => {
    const tmpHotels = [...state.hotels]

    return tmpHotels.reduce((result, hotel) => {

        // Fetch country data
        const country = state.countries.find((country) => country.id === Number(hotel.countryId)) || <Country>{}
        // Fetch city data
        const city = state.cities.find((city) => city.id === Number(hotel.cityId)) || <City>{}

        const item = populateHotel(hotel, city, country)

        return [...result, item]
    }, []);
})