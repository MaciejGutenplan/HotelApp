import React, {useState} from 'react';
import { Button } from "@mui/material";

import { HotelPayload, HotelModalProps } from "../types";
import store from "Store/store";
import { editHotel } from "Store/hotel/actions";
import { Form } from "Common/Form";
import { Modal } from "Common/Modal";
import { TextField } from "Common/inputs/TextField";
import { Select } from "Common/inputs/Select";
import {citiesWithRelations} from "Store/city/actions";
import { PopulatedCity } from "City/types";
import { Country } from "Country/types";

export const HotelModal = (props: HotelModalProps) => {

    const { record, open, handleClose } = props

    const cities = citiesWithRelations()

    const [relativeCountry, setRelativeCountry] = useState<Country | undefined>(record.country)
    const handleCityUpdate = (cityId: number) => {
        const country = cities.find((city: PopulatedCity) => city.id === cityId)?.country
        setRelativeCountry(country)
    }

    const handleEdit = (event: React.FormEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & HotelPayload
        store.dispatch(editHotel({
            id: record.id,
            name: target.name.value,
            price: Number(target.price.value),
            address: target.address.value,
            countryId: Number(relativeCountry?.id),
            cityId: target.city.value
        }))
        handleClose()
    }

    const closeButton = <Button color="error" onClick={() => handleClose() } >Cancel</Button>

    return(
        <Modal open={open} handleClose={handleClose} >
            <Form handleSubmit={handleEdit} closeButton={closeButton}>
                <TextField required id="hotel-name" name="name" label="Hotel name" value={record.name} inputProps={{ maxLength: 30 }} />
                <Select
                    required
                    id="hotel-city"
                    name="city"
                    label="City"
                    defaultValue={ record.city.id }
                    options={ cities }
                    helperText="Please select city"
                    onChangeEvent={ handleCityUpdate }/>
                <TextField disabled id="hotel-country" name="country" label="Country" inputProps={{ shrink: true }} value={ relativeCountry ? relativeCountry.name : "City has not been selected" } />
                <TextField required id="hotel-address" name="address" label="Hotel address" value={ record.address } inputProps={{ maxLength: 60 }} />
                <TextField required id="hotel-price" name="price" label="Price" type="number" value={ record.price } inputProps={{ min: 0 }} />
            </Form>
        </Modal>
    )
}