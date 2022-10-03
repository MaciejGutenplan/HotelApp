import React from 'react';
import { Button } from "@mui/material";
import { useFormik } from "formik";

import { CountryModalProps } from "../types";
import store from "Store/store";
import { editCountry } from "Store/country/actions";
import { TextField } from "Common/inputs/TextField";
import { Form } from "Common/Form";
import { Modal } from "Common/Modal";
import {InitialModalState} from "Country/consts";

export const CountryModal = (props: CountryModalProps) => {

    const { record, open, handleClose } = props

    const formik = useFormik({
        initialValues: InitialModalState(record),
        onSubmit: values => {
            store.dispatch(editCountry({
                id: record.id,
                name: values.name
            }))
            handleClose()
        },
    });

    const closeButton = <Button color="error" onClick={() => handleClose() } >Cancel</Button>

    return(
        <Modal open={open} handleClose={handleClose}>
            <Form handleSubmit={formik.handleSubmit} closeButton={closeButton} >
                <TextField
                    required
                    id="country-name"
                    name="name"
                    label="Country name"
                    inputProps={{ maxLength: 30 }}
                    value={ formik.values.name }
                    onChange={formik.handleChange}
                />
            </Form>
        </Modal>
    )
}