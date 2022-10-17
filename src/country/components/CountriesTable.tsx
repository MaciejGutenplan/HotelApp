import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {IconButton, Tooltip} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";

import { Table } from "Common/Table";
import { HomePortal } from "Common/HomePortal";
import { actionCellStyle } from "Common/styles";
import store, { RootState } from "Store/store";
import {setRecord} from "Store/common/actions";
import { CountryModal } from "./CountryModal";
import { Country } from "Country/types";
import { DetailsPanel } from "Country/components/DetailsPanel";
import { LIGHT_GREY } from "Constants/colors";

export const CountriesTable = () => {
    const countries = useSelector((state: RootState) => state.countries)
    const { t } = useTranslation();

    const selectedRecord = useSelector((state: RootState) => state.selectedRecord?.type === 'country' ? state.selectedRecord as Country : null)
    const [open, setOpen] = useState(false);

    const handleOpen = (row: any) => {
        store.dispatch(setRecord(row, 'country'))
        setOpen(true)
    };

    const handleClose = () => setOpen(false);

    const columns = [
        <span key="Name">{t("name")}</span>,
        <span key="Actions" style={actionCellStyle}>{t("actions")}</span>
    ]

    const rows = countries.map((country) => [
        <span key={country.name}>{country.name}</span>,
        <span key="edit-icon" style={actionCellStyle}>
            <Tooltip title={t('details')}>
                <IconButton onClick={() => store.dispatch(setRecord(country, 'country'))}>
                    <InfoIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title={t('edit')}>
                <IconButton onClick={() => handleOpen(country)}>
                    <EditIcon />
                </IconButton>
            </Tooltip>
        </span>]
    )

    return (
        <>
            <Table columns={columns} rows={rows} titleBarColor={LIGHT_GREY}/>
            { selectedRecord && <CountryModal record={selectedRecord} open={open} handleClose={handleClose}/> }
            { selectedRecord && <HomePortal> <DetailsPanel country={selectedRecord} /> </HomePortal> }
        </>
    )
}