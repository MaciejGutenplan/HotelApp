import React from 'react';
import { Button } from "@mui/material";

import { CountryModalProps, CountryPayload } from "../types";
import store from "Store/store";
import { editCountry } from "Store/country/actions";
import { TextField } from "Common/inputs/TextField";
import { Form } from "Common/Form";
import { Modal } from "Common/Modal";

export const CountryModal = (props: CountryModalProps) => {

    const { record, open, handleClose } = props

    const handleEdit = (event: React.FormEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & CountryPayload

        store.dispatch(editCountry({
            id: record.id,
            name: target.name.value
        }))

        handleClose()
    }

    const closeButton = <Button color="error" onClick={() => handleClose() } >Cancel</Button>

    return(
        <Modal open={open} handleClose={handleClose}>
            <Form handleSubmit={handleEdit} closeButton={closeButton} >
                <TextField
                    required
                    id="country-name"
                    name="name"
                    label="Country name"
                    inputProps={{ maxLength: 30 }}
                    value={ record.name }
                />
            </Form>
        </Modal>
    )
}