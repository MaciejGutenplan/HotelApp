import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import {IconButton, Tooltip} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import InfoIcon from '@mui/icons-material/Info';

import { Table } from "Common/Table";
import { HomePortal } from "Common/HomePortal";
import { actionCellStyle } from "Common/styles";
import { HotelModal } from "./HotelModal";
import { hotelsWithRelations } from "Store/hotel/actions";
import store, { RootState } from "Store/store";
import { setRecord } from "Store/common/actions";
import { PopulatedHotel } from "Hotel/types";
import { DetailsPanel } from "Hotel/components/DetailsPanel";
import { LIGHT_GREEN } from "Constants/colors";

export const HotelsTable = () => {

    const hotels = hotelsWithRelations();
    const selectedRecord = useSelector((state: RootState) => state.selectedRecord?.type === 'hotel' ? state.selectedRecord as PopulatedHotel : null)

    const [open, setOpen] = useState(false);
    const { t } = useTranslation();

    const handleOpen = (row: any) => {
        store.dispatch(setRecord(row, "hotel"))
        setOpen(true)
    };

    const handleClose = () => setOpen(false);

    const columns = [
        <span key="Name">{t("name")}</span>,
        <span key="Price">{t("price")}</span>,
        <span key="Address">{t("address")}</span>,
        <span key="City">{t("city")}</span>,
        <span key="Country">{t("country")}</span>,
        <span key="Actions" style={actionCellStyle}>{t("actions")}</span>
    ]

    const rows = hotels.map((hotel) => [
        <span key={hotel.name}>{hotel.name}</span>,
        <span key={hotel.price}>{hotel.price}</span>,
        <span key={hotel.address}>{hotel.address}</span>,
        <span key={hotel.city.name}>{hotel.city.name}</span>,
        <span key={hotel.country.name}>{hotel.country.name}</span>,
        <span key="edit-icon" style={actionCellStyle}>
            <Tooltip title={t('details')}>
                <IconButton onClick={() => store.dispatch(setRecord(hotel, "hotel"))}>
                    <InfoIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title={t('edit')}>
                <IconButton onClick={() => handleOpen(hotel)}>
                    <EditIcon />
                </IconButton>
            </Tooltip>
        </span>]
    )

    return (
        <>
            <Table columns={columns} rows={rows} titleBarColor={LIGHT_GREEN} />
            { selectedRecord && <HotelModal record={selectedRecord} open={open} handleClose={handleClose} /> }
            { selectedRecord && <HomePortal> <DetailsPanel hotel={selectedRecord} /> </HomePortal> }
        </>
    )
}