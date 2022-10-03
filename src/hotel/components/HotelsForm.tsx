import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import store from "Store/store";
import { HotelPayload } from "../types";
import { addHotel } from "Store/hotel/actions";
import { HOME_PAGE } from "../../constants/routes";
import { Form } from "Common/Form";
import { TextField } from "Common/inputs/TextField";
import { Select } from "Common/inputs/Select";
import { citiesWithRelations } from "Store/city/actions";
import { PopulatedCity } from "City/types";
import { Country } from "Country/types";

export const HotelsForm = () => {

    const navigate = useNavigate();
    const cities = citiesWithRelations()

    const [relativeCountry, setRelativeCountry] = useState<Country | null>()
    const handleCityUpdate = (cityId: number) => {
        const country = cities.find((city: PopulatedCity) => city.id === cityId)?.country
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
            countryId: Number(relativeCountry?.id),
            cityId: target.city.value
        }))
        navigate(HOME_PAGE)
    }

    return(
        <Form handleSubmit={handleSubmit} >
            <TextField required id="hotel-name" name="name" label="Hotel name" value="" inputProps={{ maxLength: 30 }} />
            <Select
                required
                id="hotel-city"
                name="city"
                label="City"
                defaultValue=""
                options={ cities }
                helperText="Please select city"
                onChangeEvent={ handleCityUpdate }/>
            <TextField disabled id="hotel-country" name="country" label="Country" value={ relativeCountry ? relativeCountry.name : "City has not been selected" } />
            <TextField required id="hotel-address" name="address" label="Hotel address" value="" inputProps={{ maxLength: 60 }} />
            <TextField required id="hotel-price" name="price" label="Price" value="" type="number" inputProps={{ min: 0 }} />
        </Form>
    )
}