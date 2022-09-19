import React from "react";
import { TextField } from "@mui/material";

import { DisabledFieldProps } from "../types";

export const GeneralDisabledField = (props: DisabledFieldProps) => {

    const { id, name, label, value, inputProps } = props

    return(
        <TextField
            disabled
            id={id}
            name={name}
            label={label}
            inputProps={inputProps}
            InputLabelProps={{ shrink: true }}
            value={value}
            margin="normal"
        />
    )
}