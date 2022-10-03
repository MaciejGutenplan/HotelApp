import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import store, { RootState } from "Store/store";
import { CityPayload } from "../types";
import { addCity } from "Store/city/actions";
import { HOME_PAGE } from "../../constants/routes";
import { Form } from "Common/Form";
import { TextField } from "Common/inputs/TextField";
import { Select } from "Common/inputs/Select";

export const CitiesForm = () => {

    const navigate = useNavigate();
    const countries = useSelector((state: RootState) => state.countries)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & CityPayload

        store.dispatch(addCity({
            id: 0,
            name: target.name.value,
            countryId: target.country.value
        }))
        navigate(HOME_PAGE)
    }

    return(
        <Form handleSubmit={handleSubmit}>
            <TextField required id="city-name" name="name" label="City name" value="" inputProps={{ maxLength: 30 }} />
            <Select required id="city-country" name="country" label="Country" defaultValue="" options={countries} helperText="Please select country"/>
        </Form>
    )
}