import React, {useState} from 'react';

import { HotelPayload, HotelModalProps } from "../types";
import store from "Store/store";
import { editHotel } from "Store/hotel/actions";
import { GeneralForm } from "Common/GeneralForm";
import { GeneralModal } from "Common/GeneralModal";
import { GeneralTextField } from "Common/inputs/GeneralTextField";
import { GeneralSelect } from "Common/inputs/GeneralSelect";
import { GeneralNumberField } from "Common/inputs/GeneralNumberField";
import { GeneralDisabledField } from "Common/inputs/GeneralDisabledField";
import {citiesWithRelations} from "Store/city/actions";
import {PopulatedCity} from "City/types";
import {Country} from "Country/types";

export const HotelModal = (props: HotelModalProps) => {

    const { record, open, handleClose } = props

    const cities = citiesWithRelations()

    const [relativeCountry, setRelativeCountry] = useState<Country>(record.country)
    const handleCityUpdate = (cityId: number) => {
        const country = cities.find((city: PopulatedCity) => city.id === cityId)?.country || {} as Country
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
            countryId: relativeCountry?.id,
            cityId: target.city.value
        }))
        handleClose()
    }

    return(
        <GeneralModal open={open} handleClose={handleClose} >
            <GeneralForm handleSubmit={handleEdit} withCloseButton handleClose={handleClose}>
                <GeneralTextField required id="hotel-name" name="name" label="Hotel name" defaultValue={record.name} inputProps={{ maxLength: 30 }} />
                <GeneralSelect
                    required
                    id="hotel-city"
                    name="city"
                    label="City"
                    defaultValue={ record.city.id }
                    options={ cities }
                    helperText="Please select city"
                    onChangeEvent={ handleCityUpdate }/>
                <GeneralDisabledField id="hotel-country" name="country" label="Country" inputProps={{ shrink: true }} value={ relativeCountry?.name } />
                <GeneralTextField required id="hotel-address" name="address" label="Hotel address" defaultValue={ record.address } inputProps={{ maxLength: 60 }} />
                <GeneralNumberField required id="hotel-price" name="price" label="Price" defaultValue={ record.price } inputProps={{ min: 0 }} />
            </GeneralForm>
        </GeneralModal>
    )
}