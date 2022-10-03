import React from 'react';
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

import { CityModalProps, CityPayload } from "../types";
import store, { RootState } from "Store/store";
import { editCity } from "Store/city/actions";
import { Modal } from "Common/Modal";
import { TextField } from "Common/inputs/TextField";
import { Select } from "Common/inputs/Select";
import { Form } from "Common/Form";

export const CityModal = (props: CityModalProps) => {

    const { record, open, handleClose } = props
    const countries = useSelector((state: RootState) => state.countries)

    const handleEdit = (event: React.FormEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & CityPayload
        store.dispatch(editCity({
            id: record.id,
            name: target.name.value,
            countryId: target.country.value
        }))
        handleClose()
    }

    const closeButton = <Button color="error" onClick={() => handleClose() } >Cancel</Button>

    return(
        <Modal open={open} handleClose={handleClose} >
            <Form handleSubmit={handleEdit} closeButton={closeButton}>
                <TextField required id="city-name" name="name" label="City name" value={record.name} inputProps={{ maxLength: 30 }} />
                <Select required id="city-country" name="country" label="Country" defaultValue={record.country.id} options={countries} helperText="Please select country"/>
            </Form>
        </Modal>
    )
}