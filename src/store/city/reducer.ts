import { City } from "City/types";

type CityReduxAction = {
    type: string,
    payload: City
}

const initialState: City[] = []

const nextCityId = (cities: City[]) => {
    const maxId = cities.reduce((maxId, city) => Math.max(city.id, maxId), -1)
    return maxId + 1
}

export const reducer = (state = initialState, action: CityReduxAction ) => {
    switch (action.type) {
        case 'city/add':
            return [...state, { ...action.payload, id: nextCityId(state) } ]
        case 'city/edit': {
            return state.map((city) => {
                        if (city.id != action.payload.id) {
                            return city
                        }

                        return {
                            ...city,
                            ...action.payload
                        }
                     })
            }
        default:
            return state
    }
}