import React from "react";
import { Button, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

import { CloseFormProps, FormProps } from "./types";
import { formStyle } from "Common/styles";

type Props = FormProps | CloseFormProps

export const Form = (props: Props) => {

    const { handleSubmit, closeButton } = props
    const { t } = useTranslation();

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
                    <Button color="success" type="submit" >{t("button.submit")}</Button>
                    { closeButton && (closeButton) }
                </div>
            </Grid>
        </form>
    )
}
