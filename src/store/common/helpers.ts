import { City, PopulatedCity } from "City/types";
import { Country } from "Country/types";
import { Hotel, PopulatedHotel } from "Hotel/types";

export const populateCity = (city: City, country: Country): PopulatedCity => {
    const { countryId, ...omittedCity } = city

    return {
        ...omittedCity,
        country: country
    }
}

export const populateHotel = (hotel: Hotel, city: City, country: Country) => {
    const { countryId, cityId, ...omittedHotel } = hotel

    const item: PopulatedHotel = {
        ...omittedHotel,
        city: city,
        country: country
    }

    return item
}