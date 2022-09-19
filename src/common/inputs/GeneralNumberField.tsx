import React from "react";
import { TextField } from "@mui/material";

import { NumberFieldProps } from "../types";

export const GeneralNumberField = (props: NumberFieldProps) => {

    const { id, name, label, defaultValue, required, inputProps } = props

    return(
        <TextField
            required={required}
            id={id}
            name={name}
            label={label}
            inputProps={inputProps}
            defaultValue={defaultValue}
            margin="normal"
            type="number"
        />
    )
}