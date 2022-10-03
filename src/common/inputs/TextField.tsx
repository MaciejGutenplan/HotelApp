import React, {ChangeEvent, useEffect, useState} from "react";
import { TextField as MUITextField } from "@mui/material";

import { TextFieldProps } from "../types";

export const TextField = (props: TextFieldProps) => {

    const { id, name, label, value, type = "text", required, inputProps, disabled = false } = props

    // Remove after Formik implementation
    const [changedValue, setChangedValue] = useState(value);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChangedValue(event.target.value);
    };

    return(
        <MUITextField
            required={required}
            disabled={disabled}
            id={id}
            name={name}
            label={label}
            inputProps={inputProps}
            value={changedValue}
            type={type}
            InputLabelProps={ disabled ? { shrink: true } : { }}
            onChange={handleChange}
            margin="normal"
        />
    )
}