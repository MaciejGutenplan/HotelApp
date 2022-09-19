import React from "react";
import { TextField } from "@mui/material";

import { TextFieldProps } from "../types";

export const GeneralTextField = (props: TextFieldProps) => {

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
        />
    )
}