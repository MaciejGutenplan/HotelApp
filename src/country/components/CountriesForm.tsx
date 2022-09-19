import React from 'react';
import { useNavigate } from "react-router-dom";

import store from "Store/store";
import { CountryPayload } from "../types";
import { addCountry } from "Store/country/actions";
import { GeneralTextField } from "Common/inputs/GeneralTextField";
import { HOME_PAGE } from "Common/routes";
import { GeneralForm } from "Common/GeneralForm";

export const CountriesForm = () => {

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & CountryPayload
        store.dispatch(addCountry({
            id: 0,
            name: target.name.value
        }))
        navigate(HOME_PAGE)
    }

    return(
        <GeneralForm handleSubmit={handleSubmit} >
            <GeneralTextField
                required
                id="country-name"
                name="name"
                label="Country name"
                inputProps={{ maxLength: 30 }}
                defaultValue=""
            />
        </GeneralForm>
    )
}