import React from "react";
import { Button, Grid } from "@mui/material";

import { CloseFormProps, FormProps } from "./types";
import { formStyle } from "Common/styles";

type Props = FormProps | CloseFormProps

export const Form = (props: Props) => {

    const { handleSubmit, closeButton } = props

    return(
        <form onSubmit={handleSubmit}>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                sx={formStyle}
            >
                { props.children }
                <div>
                    <Button color="success" type="submit" >Submit</Button>
                    { closeButton && (closeButton) }
                </div>
            </Grid>
        </form>
    )
}
