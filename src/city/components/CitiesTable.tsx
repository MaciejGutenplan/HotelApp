import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {IconButton, Tooltip} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { useSelector } from "react-redux";

import { Table } from "Common/Table";
import { HomePortal } from "Common/HomePortal";
import { actionCellStyle } from "Common/styles";
import { CityModal } from "./CityModal";
import { citiesWithRelations} from "Store/city/actions";
import store, {RootState} from "Store/store";
import { setRecord } from "Store/common/actions";
import { PopulatedCity} from "City/types";
import { DetailsPanel } from "City/components/DetailsPanel";
import { LIGHT_BLUE } from "Constants/colors";

export const CitiesTable = () => {
    const cities = citiesWithRelations()

    const selectedRecord = useSelector((state: RootState) => state.selectedRecord?.type === 'city' ? state.selectedRecord as PopulatedCity : null)
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const handleOpen = (row: any) => {
        store.dispatch(setRecord(row, 'city'))
        setOpen(true)
    };

    const handleClose = () => setOpen(false);

    const columns = [
        <span key="Name">{t("name")}</span>,
        <span key="Country">{t("country")}</span>,
        <span key="Actions" style={actionCellStyle}>{t("actions")}</span>,
    ]

    const rows = cities.map((city) => [
        <span key={city.name}>{city.name}</span>,
        <span key={city.country.name}>{city.country.name}</span>,
        <span key="edit-icon" style={actionCellStyle}>
            <Tooltip title={t('details')}>
                <IconButton onClick={() => store.dispatch(setRecord(city, 'city'))}>
                    <InfoIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title={t('edit')}>
                <IconButton onClick={() => handleOpen(city)}>
                    <EditIcon />
                </IconButton>
            </Tooltip>
        </span>]
    )

    return (
        <>
            <Table columns={columns} rows={rows} titleBarColor={LIGHT_BLUE}/>
            { selectedRecord && <CityModal record={selectedRecord} open={open} handleClose={handleClose}/> }
            { selectedRecord && <HomePortal> <DetailsPanel city={selectedRecord} /> </HomePortal> }
        </>
    )
}