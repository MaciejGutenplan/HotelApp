import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducer as HotelReducer } from './hotel/reducer'
import { reducer as CountryReducer } from "./country/reducer";
import { reducer as CityReducer} from "./city/reducer";

const InitialState = {
    countries: [{ id: 0, name: 'Test country' }],
    cities: [{ id: 0, name: 'Test city', countryId: 0}],
    hotels: [{ id: 0, name: 'Test hotel', price: 666, address: 'Test address', countryId: 0, cityId: 0 }]
}

const store = createStore(combineReducers({
    hotels: HotelReducer,
    countries: CountryReducer,
    cities: CityReducer
}), InitialState, composeWithDevTools(
    applyMiddleware()
));

export default store;

export type RootState = ReturnType<typeof store.getState>
