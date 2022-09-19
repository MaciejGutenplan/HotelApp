import React from "react";
import { Button, Grid } from "@mui/material";

import { CloseFormProps, FormProps } from "./types";
import { formStyle } from "Common/styles";

type Props = FormProps | CloseFormProps

export const GeneralForm = (props: Props) => {

    const { handleSubmit, withCloseButton, handleClose } = props

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
                {
                    withCloseButton ? (
                        <div>
                            <Button color="success" type="submit" >Submit</Button>
                            <Button color="error" onClick={() => handleClose() } >Cancel</Button>
                        </div> ) :
                        <Button type="submit" >Submit</Button>
                }
            </Grid>
        </form>
    )
}
