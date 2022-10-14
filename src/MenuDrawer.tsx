import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useTranslation } from "react-i18next";

import { SelectOptionType } from "Common/types";
import { Select } from "Common/inputs/Select";

type Props = {
    openMenu: boolean,
    setOpenMenu: (val: boolean) => void
}

export const MenuDrawer = ({ openMenu, setOpenMenu }: Props) => {
    const { t, i18n } = useTranslation();

    const localeOptions: SelectOptionType[] = [
        { id: 0, name: 'en' },
        { id: 1, name: 'pl'}
    ]

    const changeLanguage = ( id: string ) => {
        const lng = localeOptions.find((o) => o.id == Number(id))
        i18n.changeLanguage(lng?.name);
    }

    return (
        <React.Fragment key="menu">
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
                </Box>
            </Drawer>
        </React.Fragment>
    );
}
