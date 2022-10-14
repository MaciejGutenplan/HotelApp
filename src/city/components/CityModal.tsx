import React from 'react';
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import { CityModalProps } from "../types";
import store, { RootState } from "Store/store";
import { editCity } from "Store/city/actions";
import { Modal } from "Common/Modal";
import { TextField } from "Common/inputs/TextField";
import { Select } from "Common/inputs/Select";
import { Form } from "Common/Form";
import { createInitialModalState } from "City/consts";

export const CityModal = (props: CityModalProps) => {

    const { record, open, handleClose } = props
    const countries = useSelector((state: RootState) => state.countries)
    const { t } = useTranslation();

    const formik = useFormik({
        initialValues: createInitialModalState(record),
        onSubmit: values => {
            store.dispatch(editCity({
                id: record.id,
                name: values.name,
                countryId: Number(values.country)
            }))
            handleClose()
        },
    });

    const closeButton = <Button color="error" onClick={() => handleClose() } >{t("button.cancel")}</Button>

    return(
        <Modal open={open} handleClose={handleClose} >
            <Form handleSubmit={formik.handleSubmit} closeButton={closeButton}>
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
                    onChangeEvent={formik.handleChange}
                    options={countries}
                    helperText={t("form.countrySelectHelp")}/>
            </Form>
        </Modal>
    )
}