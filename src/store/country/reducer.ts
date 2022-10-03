import { Country } from "Country/types";

type CountryReduxAction = {
    type: string,
    payload: Country
}

const initialState: Country[] = []

const nextCountryId = (countries: Country[]) => {
    const maxId = countries.reduce((maxId, country) => Math.max(Number(country.id), maxId), -1)
    return maxId + 1
}

export const reducer = (state = initialState, action: CountryReduxAction ) => {
    switch (action.type) {
        case 'country/add':
            return [...state, { ...action.payload, id: nextCountryId(state)}]
        case 'country/edit': {
            return state.map((country) => {
                        if (country.id != action.payload.id) {
                            return country
                        }

                        return {
                            ...country,
                            ...action.payload
                        }
                     })
            }
        default:
            return state
    }
}