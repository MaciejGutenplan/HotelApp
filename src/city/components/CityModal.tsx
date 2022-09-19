import React from 'react';
import { useSelector } from "react-redux";

import { CityModalProps, CityPayload } from "../types";
import store, { RootState } from "Store/store";
import { editCity } from "Store/city/actions";
import { GeneralModal } from "Common/GeneralModal";
import { GeneralTextField } from "Common/inputs/GeneralTextField";
import { GeneralSelect } from "Common/inputs/GeneralSelect";
import { GeneralForm } from "Common/GeneralForm";

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

    return(
        <GeneralModal open={open} handleClose={handleClose} >
            <GeneralForm handleSubmit={handleEdit} withCloseButton handleClose={handleClose}>
                <GeneralTextField required id="city-name" name="name" label="City name" defaultValue={record.name} inputProps={{ maxLength: 30 }} />
                <GeneralSelect required id="city-country" name="country" label="Country" defaultValue={record.country.id} options={countries} helperText="Please select country"/>
            </GeneralForm>
        </GeneralModal>
    )
}