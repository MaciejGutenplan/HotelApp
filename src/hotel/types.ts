import { Country } from "Country/types";
import { City } from "City/types";

export type Hotel = {
    id: number | null;
    name: string;
    address: string;
    price: number | null;
    countryId: number | null;
    cityId: number | null;
}

export type PopulatedHotel = {
    id: number | null;
    name: string;
    address: string;
    price: number | null;
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