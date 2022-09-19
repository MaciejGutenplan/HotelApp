import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import store from "Store/store";
import { HotelPayload } from "../types";
import { addHotel } from "Store/hotel/actions";
import { HOME_PAGE } from "Common/routes";
import { GeneralForm } from "Common/GeneralForm";
import { GeneralTextField } from "Common/inputs/GeneralTextField";
import { GeneralSelect } from "Common/inputs/GeneralSelect";
import { GeneralDisabledField } from "Common/inputs/GeneralDisabledField";
import { GeneralNumberField } from "Common/inputs/GeneralNumberField";
import { citiesWithRelations } from "Store/city/actions";
import { PopulatedCity } from "City/types";
import { Country } from "Country/types";

export const HotelsForm = () => {

    const navigate = useNavigate();
    const cities = citiesWithRelations()

    const [relativeCountry, setRelativeCountry] = useState<Country>({} as Country)
    const handleCityUpdate = (cityId: number) => {
        const country = cities.find((city: PopulatedCity) => city.id === cityId)?.country || {} as Country
        setRelativeCountry(country)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & HotelPayload
        store.dispatch(addHotel({
            id: 0,
            name: target.name.value,
            price: Number(target.price.value),
            address: target.address.value,
            countryId: relativeCountry?.id,
            cityId: target.city.value
        }))
        navigate(HOME_PAGE)
    }

    return(
        <GeneralForm handleSubmit={handleSubmit} >
            <GeneralTextField required id="hotel-name" name="name" label="Hotel name" defaultValue="" inputProps={{ maxLength: 30 }} />
            <GeneralSelect
                required
                id="hotel-city"
                name="city"
                label="City"
                defaultValue=""
                options={ cities }
                helperText="Please select city"
                onChangeEvent={ handleCityUpdate }/>
            <GeneralDisabledField id="hotel-country" name="country" label="Country" value={ relativeCountry?.name } />
            <GeneralTextField required id="hotel-address" name="address" label="Hotel address" defaultValue="" inputProps={{ maxLength: 60 }} />
            <GeneralNumberField required id="hotel-price" name="price" label="Price" defaultValue="" inputProps={{ min: 0 }} />
        </GeneralForm>
    )
}