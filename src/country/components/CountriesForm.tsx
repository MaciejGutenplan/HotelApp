import React from 'react';
import { useNavigate } from "react-router-dom";

import store from "Store/store";
import { CountryPayload } from "../types";
import { addCountry } from "Store/country/actions";
import { TextField } from "Common/inputs/TextField";
import { HOME_PAGE } from "../../constants/routes";
import { Form } from "Common/Form";

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
        <Form handleSubmit={handleSubmit} >
            <TextField
                required
                id="country-name"
                name="name"
                label="Country name"
                inputProps={{ maxLength: 30 }}
                value=""
            />
        </Form>
    )
}