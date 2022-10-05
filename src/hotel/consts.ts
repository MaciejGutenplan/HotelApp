import { PopulatedHotel } from "Hotel/types";

export const InitialFormState = (countryId: number | null) => ({
    id: null,
    name: '',
    price: null,
    address: '',
    countryId: countryId,
    city: null
})

export const createInitialModalState = (hotel: PopulatedHotel) => ({
    id: hotel.id,
    name: hotel.name,
    price: hotel.price,
    address: hotel.address,
    country: hotel.country.id,
    city: hotel.city.id
})