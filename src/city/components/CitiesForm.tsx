import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";

import store, { RootState } from "Store/store";
import { addCity } from "Store/city/actions";
import { HOME_PAGE } from "../../constants/routes";
import { Form } from "Common/Form";
import { TextField } from "Common/inputs/TextField";
import { Select } from "Common/inputs/Select";

export const CitiesForm = () => {

    const navigate = useNavigate();
    const countries = useSelector((state: RootState) => state.countries)

    const formik = useFormik({
        initialValues: {
            name: '',
            country: Number('')
        },
        onSubmit: values => {
            store.dispatch(addCity({
                id: 0,
                name: values.name,
                countryId: values.country
            }))
            navigate(HOME_PAGE)
        },
    });

    return(
        <Form handleSubmit={formik.handleSubmit}>
            <TextField
                required
                id="city-name"
                name="name"
                label="City name"
                value={formik.values.name}
                onChange={formik.handleChange}
                inputProps={{ maxLength: 30 }}
            />
            <Select
                required
                id="city-country"
                name="country"
                label="Country"
                value={formik.values.country}
                options={countries}
                onChangeEvent={formik.handleChange}
                helperText="Please select country"
            />
        </Form>
    )
}