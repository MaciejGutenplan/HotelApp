import React from 'react';

import { CountryModalProps, CountryPayload } from "../types";
import store from "Store/store";
import { editCountry } from "Store/country/actions";
import { GeneralTextField } from "Common/inputs/GeneralTextField";
import { GeneralForm } from "Common/GeneralForm";
import { GeneralModal } from "Common/GeneralModal";

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


    return(
        <GeneralModal open={open} handleClose={handleClose}>
            <GeneralForm handleSubmit={handleEdit} withCloseButton handleClose={handleClose} >
                <GeneralTextField
                    required
                    id="country-name"
                    name="name"
                    label="Country name"
                    inputProps={{ maxLength: 30 }}
                    defaultValue={ record.name }
                />
            </GeneralForm>
        </GeneralModal>
    )
}