import React from "react";
import { MenuItem, TextField } from "@mui/material";

import { SelectProps } from "../types";

export const Select = (props: SelectProps) => {

    const { id, name, label, value, options, required, helperText, onChangeEvent, variant = "outlined", sx } = props

    return(
        <TextField
            required={required}
            id={id}
            name={name}
            label={label}
            value={value}
            margin="normal"
            variant={variant}
            helperText={helperText}
            onChange={(event) => onChangeEvent(event) }
            sx={sx}
            select
        >
            {options.map((item) => <MenuItem key={Number(item.id)} value={Number(item.id)}>{item.name}</MenuItem>)}
        </TextField>
    )
}