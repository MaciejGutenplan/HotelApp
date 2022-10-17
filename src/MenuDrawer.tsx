import * as React from 'react';
import { useTranslation } from "react-i18next";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Checkbox, FormControlLabel } from "@mui/material";

import { SelectOptionType } from "Common/types";
import { Select } from "Common/inputs/Select";

type Props = {
    openMenu: boolean,
    setOpenMenu: (val: boolean) => void
    setMode: (val: string) => void
}

export const MenuDrawer = ({ openMenu, setOpenMenu, setMode }: Props) => {
    const { t, i18n } = useTranslation();

    const storageTheme = localStorage.getItem("appTheme");
    const mode = storageTheme === null ? "light" : JSON.parse(storageTheme).mode

    const localeOptions: SelectOptionType[] = [
        { id: 0, name: 'en' },
        { id: 1, name: 'pl'}
    ]

    const changeLanguage = ( id: string ) => {
        const lng = localeOptions.find((o) => o.id == Number(id))
        i18n.changeLanguage(lng?.name);
    }

    const changeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
        const mode = event.target.checked ? 'dark' : 'light'
        const serialisedState = JSON.stringify({ mode: mode });
        localStorage.setItem("appTheme", serialisedState)
        setMode(mode)
    }

    return (
        <Drawer
            anchor="left"
            open={openMenu}
            onClose={() => setOpenMenu(false)}
        >
            <Box
                sx={{ width: 250, padding: '10px' }}
                role="presentation"
                onClick={() => setOpenMenu(false)}
                onKeyDown={() => setOpenMenu(false)}
            >
                <Select
                    id="locale-select"
                    name="locale-select"
                    label={t("navigation.language")}
                    value={Number(localeOptions.find((o) => o.name == i18n.language)?.id) }
                    options={localeOptions}
                    onChangeEvent={(e) => changeLanguage(e.target.value)}
                    variant="standard"
                    sx={{ width: "100%" }}
                />
                <FormControlLabel control={<Checkbox checked={mode === 'dark'} onChange={(e) => changeTheme(e)}/>} label={t("navigation.theme")} />
            </Box>
        </Drawer>
    );
}
