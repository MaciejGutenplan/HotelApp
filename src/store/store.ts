import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducer as HotelReducer } from './hotel/reducer'
import { reducer as CountryReducer } from "./country/reducer";
import { reducer as CityReducer} from "./city/reducer";
import { reducer as RecordReducer} from "./common/reducer";

const DefaultState = {
    countries: [{ id: 0, name: 'Test country' }],
    cities: [{ id: 0, name: 'Test city', countryId: 0}],
    hotels: [{ id: 0, name: 'Test hotel', price: 666, address: 'Test address', countryId: 0, cityId: 0 }],
    selectedRecord: null
}

const saveToLocalStorage = (state: RootState) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistentLocalData", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

const loadFromLocalStorage = () => {
    try {
        const storage = localStorage.getItem("persistentLocalData");
        if (storage === null) return DefaultState;
        return JSON.parse(storage);
    } catch (e) {
        console.warn(e);
    }
}

const store = createStore(combineReducers({
    hotels: HotelReducer,
    countries: CountryReducer,
    cities: CityReducer,
    selectedRecord: RecordReducer
}), loadFromLocalStorage(), composeWithDevTools(
    applyMiddleware()
));

store.subscribe(() => saveToLocalStorage(store.getState()));
window.addEventListener('beforeunload', ev => saveToLocalStorage(store.getState()))

export default store;

export type RootState = ReturnType<typeof store.getState>