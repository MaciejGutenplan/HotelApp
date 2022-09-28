import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import store from "Store/store";
import { addHotel } from "Store/hotel/actions";
import { HOME_PAGE } from "../../constants/routes";
import { Form } from "Common/Form";
import { TextField } from "Common/inputs/TextField";
import { Select } from "Common/inputs/Select";
import { citiesWithRelations } from "Store/city/actions";
import { PopulatedCity } from "City/types";
import { Country } from "Country/types";

export const HotelsForm = () => {

    const navigate = useNavigate();
    const cities = citiesWithRelations()

    const [relativeCountry, setRelativeCountry] = useState<Country | null>()

    const formik = useFormik({
        initialValues: {
            id: NaN,
            name: '',
            price: NaN,
            address: '',
            countryId: relativeCountry?.id,
            city: NaN
        },
        onSubmit: values => {
            store.dispatch(addHotel({
                id: NaN,
                name: values.name,
                price: values.price,
                address: values.address,
                countryId: relativeCountry?.id,
                cityId: values.city
            }))
            navigate(HOME_PAGE)
        },
    });

    const handleCityUpdate = (value: string) => {
        const country = cities.find((city: PopulatedCity) => city.id === Number(value))?.country
        setRelativeCountry(country)
    }

    return(
        <Form handleSubmit={formik.handleSubmit} >
            <TextField
                required
                id="hotel-name"
                name="name"
                label="Hotel name"
                value={formik.values.name}
                onChange={formik.handleChange}
                inputProps={{ maxLength: 30 }} />
            <Select
                required
                id="hotel-city"
                name="city"
                label="City"
                value={formik.values.city}
                options={ cities }
                helperText="Please select city"
                onChangeEvent={ (e) =>{
                    formik.handleChange(e)
                    handleCityUpdate(e.target.value)
                }}/>
            <TextField
                disabled
                id="hotel-country"
                name="country"
                label="Country"
                value={ relativeCountry ? relativeCountry.name : "City has not been selected" } />
            <TextField
                required
                id="hotel-address"
                name="address"
                label="Hotel address"
                value={formik.values.address}
                onChange={formik.handleChange}
                inputProps={{ maxLength: 60 }} />
            <TextField
                required
                id="hotel-price"
                name="price"
                label="Price"
                value={formik.values.price}
                onChange={formik.handleChange}
                inputProps={{ min: 0 }}/>
        </Form>
    )
}