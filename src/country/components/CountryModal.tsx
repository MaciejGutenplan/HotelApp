import React from 'react';
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import { CountryModalProps } from "../types";
import store from "Store/store";
import { editCountry } from "Store/country/actions";
import { TextField } from "Common/inputs/TextField";
import { Form } from "Common/Form";
import { Modal } from "Common/Modal";
import { createInitialModalState } from "Country/consts";

export const CountryModal = (props: CountryModalProps) => {

    const { record, open, handleClose } = props
    const { t } = useTranslation();

    const formik = useFormik({
        initialValues: createInitialModalState(record),
        onSubmit: values => {
            store.dispatch(editCountry({
                id: record.id,
                name: values.name
            }))
            handleClose()
        },
    });

    const closeButton = <Button color="error" onClick={() => handleClose() } >{t("button.cancel")}</Button>

    return(
        <Modal open={open} handleClose={handleClose}>
            <Form handleSubmit={formik.handleSubmit} closeButton={closeButton} >
                <TextField
                    required
                    id="country-name"
                    name="name"
                    label={t("form.hotel")}
                    inputProps={{ maxLength: 30 }}
                    value={ formik.values.name }
                    onChange={formik.handleChange}
                />
            </Form>
        </Modal>
    )
}