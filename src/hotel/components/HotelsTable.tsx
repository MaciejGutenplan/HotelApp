import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import {IconButton, Tooltip} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from '@mui/icons-material/Info';

import { Table } from "Common/Table";
import { HotelModal } from "./HotelModal";
import { hotelsWithRelations } from "Store/hotel/actions";
import { actionCellStyle } from "Common/styles";
import { HotelTableProps } from "Hotel/types";
import { DetailsPanel } from "Hotel/components/DetailsPanel";
import { LIGHT_GREEN } from "Constants/colors";

export const HotelsTable = ({ setDetailsPanel }: HotelTableProps) => {
    const hotels = hotelsWithRelations();
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
                <IconButton onClick={() => setDetailsPanel(<DetailsPanel hotel={hotel} setDetailsPanel={setDetailsPanel} />)}>
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
        </>
    )
}