import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import store from "Store/store";
import { addHotel } from "Store/hotel/actions";
import { HOME_PAGE } from "Constants/routes";
import { Form } from "Common/Form";
import { TextField } from "Common/inputs/TextField";
import { Select } from "Common/inputs/Select";
import { citiesWithRelations } from "Store/city/actions";
import { PopulatedCity } from "City/types";
import { Country } from "Country/types";
import { InitialFormState } from "Hotel/consts";

export const HotelsForm = () => {

    const navigate = useNavigate();
    const cities = citiesWithRelations()
    const { t } = useTranslation();

    const [relativeCountry, setRelativeCountry] = useState<Country | null>()

    const formik = useFormik({
        initialValues: InitialFormState(relativeCountry?.id || null),
        onSubmit: values => {
            store.dispatch(addHotel({
                id: null,
                name: values.name,
                price: values.price,
                address: values.address,
                countryId: Number(relativeCountry?.id),
                cityId: values.city
            }))
            navigate(HOME_PAGE)
        },
    });

    const handleCityUpdate = (value: string) => {
        const country = cities.find((city: PopulatedCity) => city.id === Number(value))?.country
        setRelativeCountry(country)
    }

    return(
        <Form handleSubmit={formik.handleSubmit} >
            <TextField
                required
                id="hotel-name"
                name="name"
                label={t("form.hotel")}
                value={formik.values.name}
                onChange={formik.handleChange}
                inputProps={{ maxLength: 30 }} />
            <Select
                required
                id="hotel-city"
                name="city"
                label={t("form.city")}
                value={formik.values.city}
                options={ cities }
                helperText={t("form.citySelectHelp")}
                onChangeEvent={ (e) =>{
                    formik.handleChange(e)
                    handleCityUpdate(e.target.value)
                }}/>
            <TextField
                disabled
                id="hotel-country"
                name="country"
                label={t("form.country")}
                value={ relativeCountry ? relativeCountry.name : t('form.citySelectError') } />
            <TextField
                required
                id="hotel-address"
                name="address"
                label={t("form.hotelAddress")}
                value={formik.values.address}
                onChange={formik.handleChange}
                inputProps={{ maxLength: 60 }} />
            <TextField
                required
                id="hotel-price"
                name="price"
                label={t("form.price")}
                value={formik.values.price}
                onChange={formik.handleChange}
                inputProps={{ min: 0 }}/>
        </Form>
    )
}