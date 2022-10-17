import { Country } from "Country/types";
import { PopulatedCity } from "City/types";
import { PopulatedHotel } from "Hotel/types";

type CountryReduxAction = {
    type: string,
    payload: (PopulatedCity & PopulatedHotel & Country) & { type: string } | null
}

const initialState: (PopulatedCity & PopulatedHotel & Country) & { type: string } | null = null


export const reducer = (state = initialState, action: CountryReduxAction ) => {
    switch (action.type) {
        case 'record/set':
            return action.payload
        case 'record/unset': {
            return null
        }
        default:
            return state
    }
}