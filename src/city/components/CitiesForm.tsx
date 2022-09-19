import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import store, { RootState } from "Store/store";
import { CityPayload } from "../types";
import { addCity } from "Store/city/actions";
import { HOME_PAGE } from "Common/routes";
import { GeneralForm } from "Common/GeneralForm";
import { GeneralTextField } from "Common/inputs/GeneralTextField";
import { GeneralSelect } from "Common/inputs/GeneralSelect";

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
        <GeneralForm handleSubmit={handleSubmit}>
            <GeneralTextField required id="city-name" name="name" label="City name" defaultValue="" inputProps={{ maxLength: 30 }} />
            <GeneralSelect required id="city-country" name="country" label="Country" defaultValue="" options={countries} helperText="Please select country"/>
        </GeneralForm>
    )
}