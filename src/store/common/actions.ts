import { Country } from "Country/types";
import { PopulatedCity } from "City/types";
import { PopulatedHotel } from "Hotel/types";

export const setRecord = (payload: Country | PopulatedCity | PopulatedHotel | null, type: string) => {
    return {
        type: "record/set",
        payload: { ...payload, type: type }
    }
}

export const unsetRecord = () => {
    return {
        type: "record/unset",
        payload: null
    }
}