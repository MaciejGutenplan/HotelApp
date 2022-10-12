import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import store, { RootState } from "Store/store";
import { addCity } from "Store/city/actions";
import { HOME_PAGE } from "Constants/routes";
import { Form } from "Common/Form";
import { TextField } from "Common/inputs/TextField";
import { Select } from "Common/inputs/Select";
import { InitialFormState } from "City/consts";

export const CitiesForm = () => {

    const navigate = useNavigate();
    const countries = useSelector((state: RootState) => state.countries)
    const { t } = useTranslation();

    const formik = useFormik({
        initialValues: InitialFormState,
        onSubmit: values => {
            store.dispatch(addCity({
                id: null,
                name: values.name,
                countryId: Number(values.country)
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
                label={t("form.city")}
                value={formik.values.name}
                onChange={formik.handleChange}
                inputProps={{ maxLength: 30 }}
            />
            <Select
                required
                id="city-country"
                name="country"
                label={t("form.country")}
                value={formik.values.country}
                options={countries}
                onChangeEvent={formik.handleChange}
                helperText={t("form.countrySelectHelp")}
            />
        </Form>
    )
}