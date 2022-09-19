import { Country } from "Country/types";
import { City } from "City/types";

export type Hotel = {
    id: number;
    name: string;
    address: string;
    price: number;
    countryId: number;
    cityId: number;
}

export type PopulatedHotel = {
    id: number;
    name: string;
    address: string;
    price: number;
    country: Country;
    city: City;
}

export type HotelPayload = {
    name: { value: string },
    address: { value: string },
    price: { value: number },
    country: { value: string },
    city: { value: number }
}

export type HotelModalProps = {
    record: PopulatedHotel;
    open: boolean;
    handleClose: () => any;
}