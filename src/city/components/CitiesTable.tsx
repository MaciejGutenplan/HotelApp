import React, { useState } from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useTranslation } from "react-i18next";

import { Table } from "Common/Table";
import { CityModal } from "./CityModal";
import { citiesWithRelations } from "Store/city/actions";
import {editCellStyle} from "Common/styles";

export const CitiesTable = () => {
    const cities = citiesWithRelations()

    const [selectedRecord, setSelectedRecord] = useState<any>();
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const handleOpen = (row: any) => {
        setSelectedRecord(row)
        setOpen(true)
    };

    const handleClose = () => setOpen(false);

    const columns = [
        <span key="Name">{t("name")}</span>,
        <span key="Country">{t("country")}</span>,
        <span key="Edit" style={editCellStyle}>{t("edit")}</span>,
    ]

    const rows = cities.map((city) => [
        <span key={city.name}>{city.name}</span>,
        <span key={city.country.name}>{city.country.name}</span>,
        <span key="edit-icon" style={editCellStyle}>
            <IconButton onClick={() => handleOpen(city)}>
                <EditIcon />
            </IconButton>
        </span>]
    )

    return (
        <>
            <Table columns={columns} rows={rows} />
            { selectedRecord && <CityModal record={selectedRecord} open={open} handleClose={handleClose}/> }
        </>
    )
}