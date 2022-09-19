import React from "react";
import { MenuItem, TextField } from "@mui/material";

import { SelectProps } from "../types";

export const GeneralSelect = (props: SelectProps) => {

    const { id, name, label, defaultValue, options, required, helperText, onChangeEvent } = props

    return(
        <TextField
            required={required}
            id={id}
            name={name}
            label={label}
            defaultValue={defaultValue}
            margin="normal"
            helperText={helperText}
            onChange={(event) => { if(onChangeEvent) {
                onChangeEvent(event.target.value)
            } } }
            select
        >
            {options.map((item) => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
        </TextField>
    )
}