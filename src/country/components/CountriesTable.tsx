import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {IconButton, Tooltip} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";

import { Table } from "Common/Table";
import { RootState } from "Store/store";
import { CountryModal } from "./CountryModal";
import { actionCellStyle } from "Common/styles";
import { CountryTableProps } from "Country/types";
import { DetailsPanel } from "Country/components/DetailsPanel";
import { LIGHT_GREY } from "Constants/colors";

export const CountriesTable = ({ setDetailsPanel }: CountryTableProps) => {
    const countries = useSelector((state: RootState) => state.countries)
    const { t } = useTranslation();

    const [selectedRecord, setSelectedRecord] = useState<any>();
    const [open, setOpen] = useState(false);

    const handleOpen = (row: any) => {
        setSelectedRecord(row)
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
                <IconButton onClick={() => setDetailsPanel(<DetailsPanel country={country} setDetailsPanel={setDetailsPanel} />)}>
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
        </>
    )
}