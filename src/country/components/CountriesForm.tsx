import React from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import store from "Store/store";
import { addCountry } from "Store/country/actions";
import { TextField } from "Common/inputs/TextField";
import { HOME_PAGE } from "Constants/routes";
import { Form } from "Common/Form";
import { InitialFormState } from "Country/consts";

export const CountriesForm = () => {

    const navigate = useNavigate();
    const { t } = useTranslation();

    const formik = useFormik({
        initialValues: InitialFormState,
        onSubmit: values => {
            store.dispatch(addCountry({
                id: null,
                name: values.name
            }))
            navigate(HOME_PAGE)
        },
    });

    return(
        <Form handleSubmit={formik.handleSubmit} >
            <TextField
                required
                id="name"
                name="name"
                label={t("form.hotel")}
                inputProps={{ maxLength: 30 }}
                onChange={formik.handleChange}
                value={formik.values.name}
            />
        </Form>
    )
}