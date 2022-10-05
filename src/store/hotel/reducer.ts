import { Hotel } from "Hotel/types";

type HotelReduxAction = {
    type: string,
    payload: Hotel
}

const initialState: Hotel[] = []

const nextHotelId = (hotels: Hotel[]) => {
    const maxId = hotels.reduce((maxId, hotel) => Math.max(Number(hotel.id), maxId), -1)
    return maxId + 1
}

export const reducer = (state = initialState, action: HotelReduxAction ) => {
    switch (action.type) {
        case 'hotel/add':
            return [...state, { ...action.payload, id: nextHotelId(state)}]
        case 'hotel/edit': {
            return state.map((hotel) => {
                        if (hotel.id != action.payload.id) {
                            return hotel
                        }

                        return {
                            ...hotel,
                            ...action.payload
                        }
                     })
            }
        default:
            return state
    }
}