import React from "react";
import { TextField as MUITextField } from "@mui/material";

import { TextFieldProps } from "../types";

export const TextField = (props: TextFieldProps) => {

    const { id, name, label, value, type = "text", required, inputProps, disabled = false, onChange } = props

    return(
        <MUITextField
            required={required}
            disabled={disabled}
            id={id}
            name={name}
            label={label}
            inputProps={inputProps}
            value={value}
            type={type}
            InputLabelProps={ disabled ? { shrink: true } : { }}
            onChange={onChange}
            margin="normal"
        />
    )
}