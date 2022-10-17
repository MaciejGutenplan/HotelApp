import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from "react-i18next";

import { MenuDrawer } from "./MenuDrawer";

type Props = {
    setMode: (val: string) => void
}

export const Navigation = ({ setMode }: Props) => {
    const { t } = useTranslation();

    const [openMenu, setOpenMenu] = React.useState<boolean>(false);

    return(
        <Box sx={{ flexGrow: 1, paddingBottom: '10px' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                        onClick={() => setOpenMenu(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <MenuDrawer openMenu={openMenu} setOpenMenu={setOpenMenu} setMode={setMode}/>

                    <Typography
                        variant="h6"
                        noWrap
                        component={RouterLink}
                        to='/'
                        className='nav-bar-title'
                    >Hotel App </Typography>

                    <Button variant="outlined" style={{ color: "white" }} startIcon={<AddCircleIcon />} component={RouterLink} to="/add-hotel" >{t("navigation.hotel")}</Button>
                    <Button variant="outlined" style={{ color: "white" }} startIcon={<AddCircleIcon />} component={RouterLink} to="/add-city" >{t("navigation.city")}</Button>
                    <Button variant="outlined" style={{ color: "white" }} startIcon={<AddCircleIcon />} component={RouterLink} to="/add-country" >{t("navigation.country")}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}