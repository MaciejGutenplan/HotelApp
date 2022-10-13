import { Button } from "@mui/material";
import React, { useState } from 'react';
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import { HotelModalProps } from "../types";
import store from "Store/store";
import { editHotel } from "Store/hotel/actions";
import { Form } from "Common/Form";
import { Modal } from "Common/Modal";
import { TextField } from "Common/inputs/TextField";
import { Select } from "Common/inputs/Select";
import { citiesWithRelations } from "Store/city/actions";
import { PopulatedCity } from "City/types";
import { Country } from "Country/types";
import { createInitialModalState } from "Hotel/consts";

export const HotelModal = (props: HotelModalProps) => {

    const { record, open, handleClose } = props
    const { t } = useTranslation();

    const cities = citiesWithRelations()

    const [relativeCountry, setRelativeCountry] = useState<Country | null>(record.country)

    const formik = useFormik({
        initialValues: createInitialModalState(record),
        onSubmit: values => {
            store.dispatch(editHotel({
                id: values.id,
                name: values.name,
                price: values.price,
                address: values.address,
                countryId: Number(relativeCountry?.id),
                cityId: values.city
            }))
            handleClose()
        },
    });

    const handleCityUpdate = (value: string) => {
        const country = cities.find((city: PopulatedCity) => city.id === Number(value))?.country || null
        setRelativeCountry(country)
    }

    const closeButton = <Button color="error" onClick={() => handleClose() } >{t("button.cancel")}</Button>

    return(
        <Modal open={open} handleClose={handleClose} >
            <Form handleSubmit={formik.handleSubmit} closeButton={closeButton}>
                <TextField
                    required
                    id="hotel-name"
                    name="name"
                    label={t("form.hotel")}
                    value={ formik.values.name }
                    onChange={ formik.handleChange }
                    inputProps={{ maxLength: 30 }}
                />
                <Select
                    required
                    id="hotel-city"
                    name="city"
                    label={t("form.city")}
                    value={ formik.values.city }
                    options={ cities }
                    helperText={t("form.citySelectHelp")}
                    onChangeEvent={ (e) => {
                        formik.handleChange(e)
                        handleCityUpdate(e.target.value)
                    } }/>
                <TextField
                    disabled
                    id="hotel-country"
                    name="country"
                    label={t("form.country")}
                    inputProps={{ shrink: true }}
                    value={ relativeCountry ? relativeCountry.name : t("form.citySelectError") } />
                <TextField
                    required
                    id="hotel-address"
                    name="address"
                    label={t("form.hotelAddress")}
                    value={ formik.values.address }
                    onChange={ formik.handleChange }
                    inputProps={{ maxLength: 60 }}
                />
                <TextField
                    required
                    id="hotel-price"
                    name="price"
                    label={t("form.price")}
                    value={ formik.values.price }
                    onChange={ formik.handleChange }
                    inputProps={{ min: 0 }}
                />
            </Form>
        </Modal>
    )
}